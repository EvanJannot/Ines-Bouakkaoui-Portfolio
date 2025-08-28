import { useEffect, useState } from "react";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function TechExplorationSection({
  id = "about-me",
  title = "About me",
  topText = "I actively explore new technologies to understand their potential and spark creative ideas :",
  bottomText = "These experiences help me develop my skills and stay on top of new trends.",
  items = [
    {
      desc: "<strong>I generated a 3D model using AI</strong> and integrated it into Unreal Engine 5.",
    },
    {
      desc: "Tested <strong>real-time body tracking in Unreal</strong> with the school's latest audiovisual cameras. ",
    },
    {
      desc: "I participated in a <strong>game jam</strong> to quickly create prototypes. ",
    },
  ],
  media, // url image
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
    <section id={id} className="scroll-mt-28 mt-8">
      <div className="grid gap-6 md:grid-cols-12 items-stretch">
        {/* Carte gauche */}
        <div className="md:col-span-7 flex">
          <div className="rounded-xl bg-[#FFF3EF] p-5 md:p-6 shadow-sm border border-black/10 w-full h-full flex flex-col">
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-2xl font-semibold">{title}</h2>
            </div>

            <p
              className="text-sm text-black/80 leading-relaxed flex-1 whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: topText,
              }}
            />

            {/* Texte de contexte */}
            <ul className="list-disc list-inside space-y-2 text-sm leading-relaxed">
              {items.map((it, i) => {
                if (typeof it === "string") {
                  return <li key={i}>{it}</li>;
                }
                const { desc } = it || {};
                return (
                  <li
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: desc,
                    }}
                  />
                );
              })}
            </ul>

            <p
              className="text-sm text-black/80 leading-relaxed flex-1 whitespace-pre-line"
              dangerouslySetInnerHTML={{
                __html: bottomText,
              }}
            />
          </div>
        </div>
        {/* Média droite */}
        <div className="md:col-span-5">
          <div className="rounded-lg border border-black/10 bg-white/60 aspect-video overflow-hidden grid place-items-center h-full">
            {media ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-full h-full cursor-zoom-in"
                aria-label="Open image"
                title="Click to enlarge"
              >
                <img
                  src={media}
                  alt={mediaAlt}
                  className="w-full h-full object-cover hover:cursor-pointer"
                  loading="lazy"
                />
              </button>
            ) : (
              <span className="text-xs text-black/50">Media placeholder</span>
            )}
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
