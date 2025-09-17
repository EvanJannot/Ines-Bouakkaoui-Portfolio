import { useEffect, useMemo, useState } from "react";
import { HiX } from "react-icons/hi";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

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
        <span className="px-4 py-2 rounded-lg bg-black text-white font-semibold text-2xl">
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
              className="aspect-[4/3] rounded-md overflow-hidden border border-black/10 hover:border-black/40 transition hover:cursor-pointer"
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
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative flex items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton précédent */}
        <button
          onClick={onPrev}
          className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl grid place-items-center"
          aria-label="Previous"
        >
          ‹
        </button>

        {/* Contenu principal */}
        <div className="relative max-w-6xl w-full">
          {/* Bouton fermer */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 md:top-0 md:right-0 z-[101] inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-black shadow hover:bg-white hover:cursor-pointer"
            aria-label="Close"
          >
            <HiX className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="bg-black/10 rounded-lg overflow-hidden p-0 md:p-2">
            <TransformWrapper
              minScale={0.5}
              maxScale={8}
              initialScale={1}
              centerOnInit
              doubleClick={{ mode: "zoomIn", step: 0.8 }}
              wheel={{ step: 0.15 }}
              pinch={{ step: 0.15 }}
              wrapperClass="w-[98vw] h-[94vh] mx-auto rounded-lg overflow-hidden bg-black/5"
              contentClass="w-fit h-fit"
              limitToBounds={true}
              boundsPadding={0.9}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {/* Boutons de contrôle */}
                  <div className="absolute top-3 left-3 z-[101] flex gap-2">
                    <button
                      onClick={() => zoomIn()}
                      className="px-2 py-1 rounded bg-white/90 shadow hover:cursor-pointer"
                    >
                      +
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="px-2 py-1 rounded bg-white/90 shadow hover:cursor-pointer"
                    >
                      −
                    </button>
                    <button
                      onClick={() => resetTransform()}
                      className="px-2 py-1 rounded bg-white/90 shadow hover:cursor-pointer"
                    >
                      Reset
                    </button>
                  </div>
                  <TransformComponent>
                    <img
                      src={img.src}
                      alt={img.alt || "Full image"}
                      className="max-h-[80vh] w-auto mx-auto object-contain"
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>

        {/* Bouton suivant */}
        <button
          onClick={onNext}
          className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white text-2xl grid place-items-center"
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
