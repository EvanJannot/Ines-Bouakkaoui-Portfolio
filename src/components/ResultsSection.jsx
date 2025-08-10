import { useEffect, useMemo, useState } from "react";

export default function ResultsSection({
  id = "results",
  title = "Results",
  videoUrl, // ← URL YouTube/Vimeo ou mp4
  images = [], // ← [{src, alt?}, ...] (on affichera 4 vignettes)
}) {
  const thumbs = useMemo(() => images.filter(Boolean).slice(0, 4), [images]);
  const [lightboxIdx, setLightboxIdx] = useState(null); // null => fermé

  // fermer avec ESC
  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIdx === null) return;
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight")
        setLightboxIdx((i) => (i + 1) % thumbs.length);
      if (e.key === "ArrowLeft")
        setLightboxIdx((i) => (i - 1 + thumbs.length) % thumbs.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, thumbs.length]);

  return (
    <section id={id} className="scroll-mt-28 mt-10">
      {/* Titre pilule */}
      <div className="flex justify-center mb-4">
        <span className="px-4 py-2 rounded-lg bg-black text-white font-semibold">
          {title}
        </span>
      </div>

      {/* Vidéo principale */}
      <MainVideo videoUrl={videoUrl} />

      {/* Thumbs (4) */}
      {thumbs.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {thumbs.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="aspect-[4/3] rounded-md overflow-hidden border border-black/10 hover:border-black/40 transition"
              aria-label={`Open image ${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt || `Result ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIdx !== null && thumbs[lightboxIdx] && (
        <Lightbox
          img={thumbs[lightboxIdx]}
          onClose={() => setLightboxIdx(null)}
          onPrev={() =>
            setLightboxIdx((i) => (i - 1 + thumbs.length) % thumbs.length)
          }
          onNext={() => setLightboxIdx((i) => (i + 1) % thumbs.length)}
        />
      )}
    </section>
  );
}

/* === Sous-composants === */

function MainVideo({ videoUrl }) {
  if (!videoUrl) {
    return (
      <div className="aspect-video max-w-5xl mx-auto rounded-lg bg-white/60 border border-black/10 grid place-items-center">
        <span className="text-sm text-black/50">Video placeholder</span>
      </div>
    );
  }

  const isMp4 = /\.mp4($|\?)/i.test(videoUrl);

  return isMp4 ? (
    <video
      src={videoUrl}
      controls
      className="w-full max-w-5xl mx-auto aspect-video rounded-lg border border-black/10 bg-black"
    />
  ) : (
    <div className="relative w-full max-w-6xl mx-auto aspect-video overflow-hidden rounded-lg border border-black/10">
      <iframe
        src={toEmbedUrl(videoUrl)}
        title="Results video"
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Lightbox({ img, onClose, onPrev, onNext }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80">
      {/* zone clic pour fermer */}
      <button
        className="absolute inset-0"
        onClick={onClose}
        aria-label="Close"
      />
      {/* contenu centré */}
      <div className="relative z-10 w-full h-full grid place-items-center p-4">
        <img
          src={img.src}
          alt={img.alt || "Full image"}
          className="max-h-[82vh] max-w-[92vw] object-contain rounded-md shadow-2xl"
        />
        {/* Controls */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white text-xl grid place-items-center"
          aria-label="Close"
        >
          ×
        </button>
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl grid place-items-center"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl grid place-items-center"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}

/* Helpers */
function toEmbedUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1);
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname.includes("vimeo.com")) {
      const id = u.pathname.split("/").filter(Boolean).pop();
      return `https://player.vimeo.com/video/${id}`;
    }
    return url;
  } catch {
    return url;
  }
}
