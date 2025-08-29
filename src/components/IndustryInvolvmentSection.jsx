import { useEffect, useMemo, useState } from "react";
import { HiX } from "react-icons/hi";

import RDVtech from "../assets/about/RDV-en-tech.jpg";
import MF1 from "../assets/about/moment-factory1.JPG";
import MF2 from "../assets/about/moment-factory2.JPG";
import MF3 from "../assets/about/moment-factory3.JPG";
import IndieAsylum1 from "../assets/about/indie-asylum1.jpg";
import IndieAsylum2 from "../assets/about/indie-asylum2.jpg";
import PHI from "../assets/about/centre-PHI.jpg";
import SAT1 from "../assets/about/SAT1.jpg";
import SAT2 from "../assets/about/SAT2.JPG";
import HQ1 from "../assets/about/hydro-quebec1.jpeg";
import HQ2 from "../assets/about/hydro-quebec2.jpeg";

export default function IndustryInvolvmentSection({
  title = "Industry Involvment",
  contextText = "As a project coordinator for <strong>Femmes+ en Tech</strong>, I contributed to the organization of <strong>14 company visits</strong> (127 participants), <strong>6 creative competitions</strong> (83 participants), and <strong>major networking events</strong> like Rendez-vous en Tech that gathered <strong>200+ participants.</strong> I also contributed to run <strong>midi-causeries (Lunch & Learn)</strong> with professionals, <strong>giving students a safe space to exchange about careers and industry challenges.</strong> These initiatives allowed us to build strong connections with studios such as Moment Factory, Indie Asylum, Desjardins and CAE, while <strong>promoting diversity and inclusion in the tech ecosystem.</strong>", // string
  videoUrl = RDVtech,
  images = [
    { src: MF1 },
    { src: MF2 },
    { src: MF3 },
    { src: IndieAsylum1 },
    { src: IndieAsylum2 },
    { src: PHI },
    { src: SAT1 },
    { src: SAT2 },
    { src: HQ1 },
    { src: HQ2 },
    /*{ src: ELGameplay1, alt: "Gameplay 1" },
    { src: ELGameplay2, alt: "Gameplay 2" },
    { src: ELGameplay3, alt: "Gameplay 3" },
    { src: ELGameplay4, alt: "Gameplay 4" },*/
  ],
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
    <section id="industry-involvement" className="scroll-mt-28 mt-8">
      <div className="rounded-xl bg-[#FFF3EF] p-5 md:p-6 shadow-sm border border-black/10 mb-10">
        <h2 className="text-xl font-semibold mb-3">{title}</h2>

        {/* Texte de contexte */}
        {contextText ? (
          <p
            className="text-sm text-black/80 leading-relaxed flex-1 whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: contextText,
            }}
          />
        ) : null}
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

function MainVideo({ videoUrl }) {
  if (!videoUrl) {
    return (
      <div className="aspect-video max-w-5xl mx-auto rounded-lg bg-white/60 border border-black/10 grid place-items-center mt-10">
        <span className="text-sm text-black/50">Image placeholder</span>
      </div>
    );
  }

  const isMp4 = /\.mp4($|\?)/i.test(videoUrl);
  const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(videoUrl);

  if (isMp4) {
    return (
      <video
        src={videoUrl}
        controls
        className="w-full max-w-5xl mx-auto aspect-video rounded-lg border border-black/10 bg-black"
      />
    );
  }

  if (isImage) {
    return (
      <img
        src={videoUrl}
        alt="Main illustration"
        className="w-full max-w-5xl mx-auto aspect-video rounded-lg border border-black/10 object-cover"
      />
    );
  }

  // sinon, on suppose que c'est une URL de vidéo externe (YouTube, Vimeo…)
  return (
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
            <img
              src={img.src}
              alt={img.alt || "Full image"}
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
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
