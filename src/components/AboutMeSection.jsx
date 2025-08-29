import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import photo_pro from "../assets/about/Photo_professionnelle.jpg";

export default function AboutMeSection({
  title = "About me",
  contextText = "I am a curious and dedicated technical game designer and technical artist. Formerly a chemist with laboratory experience, these experiences gave me a rigorous work ethic and allowed me to develop my analytical skills, which I now apply to video games.", // string
  media = photo_pro,
  mediaAlt = "Project media",
}) {
  const [open, setOpen] = useState(false);

  // Fermer avec ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="about-me" className="scroll-mt-28">
      <div className="grid gap-6 md:grid-cols-12 items-stretch">
        {/* Média gauche */}
        <div className="md:col-span-5">
          <div className="rounded-lg border border-black/10 bg-white/60 h-[450px] overflow-hidden">
            {" "}
            {/* Pour Evan : J'ai modifié ici le CSS (h-450) */}
            {media ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-full h-full cursor-zoom-in"
                aria-label="Open image"
                title="Click to enlarge"
              >
                {/* Pour Evan : J'ai modifié ici le CSS [object-position:center_10%] */}
                <img
                  src={media}
                  alt={mediaAlt}
                  className="w-full h-full object-cover [object-position:center_10%] hover:cursor-pointer"
                  loading="lazy"
                />
              </button>
            ) : (
              <span className="text-xs text-black/50">Media placeholder</span>
            )}
          </div>
        </div>
        {/* Carte droite */}
        <div className="md:col-span-7 flex">
          <div className="rounded-xl bg-[#FFF3EF] p-5 md:p-6 shadow-sm border border-black/10 w-full h-full flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>

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
        </div>
      </div>

      {/* Lightbox simple (pas de flèches) */}
      {open && media && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 md:top-0 md:right-0 z-[101] inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-black shadow hover:bg-white hover:cursor-pointer"
              aria-label="Close"
            >
              <HiX className="w-5 h-5" />
            </button>
            <div className="bg-black/10 rounded-lg overflow-hidden p-0 md:p-2">
              <img
                src={media}
                alt={mediaAlt || "Full image"}
                className="max-h-[80vh] w-auto mx-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
