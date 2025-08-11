import { useState, useCallback, useEffect } from "react";
import { HiX, HiPlay } from "react-icons/hi";

function isVideoSrc(src = "") {
  const lower = src.toLowerCase();
  return (
    lower.endsWith(".mp4") ||
    lower.endsWith(".webm") ||
    lower.endsWith(".ogg") ||
    lower.includes("youtube.com") ||
    lower.includes("youtu.be") ||
    lower.includes("vimeo.com")
  );
}

// Normalise item.media ou item.images => [{type, src, poster?}, ...]
function normalizeMedia(item) {
  if (Array.isArray(item.media) && item.media.length) {
    return item.media.map((m) =>
      typeof m === "string"
        ? { type: isVideoSrc(m) ? "video" : "image", src: m }
        : {
            type: m.type ?? (isVideoSrc(m.src) ? "video" : "image"),
            src: m.src,
            poster: m.poster,
          }
    );
  }
  if (Array.isArray(item.images) && item.images.length) {
    return item.images.map((src) => ({ type: "image", src }));
  }
  return [];
}

export default function WhatIDidSection({ items = [] }) {
  // Lightbox state
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null); // {type, src, poster?}

  const close = useCallback(() => setOpen(false), []);
  const openMedia = useCallback((m) => {
    setCurrent(m);
    setOpen(true);
  }, []);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="what-i-did" className="scroll-mt-28 mt-12 space-y-10">
      {/* Aperçu (table) */}
      <div className="bg-[#FDF3EF] rounded-xl p-6 md:p-7 shadow-sm border border-black/10">
        <h2 className="text-center text-lg md:text-xl font-extrabold mb-4">
          Summary of what I did
        </h2>

        <table className="w-full border-collapse">
          <tbody>
            {items.map(({ category, details, anchor }, i) => (
              <tr
                key={anchor || `${i}-${category}`}
                className="border-b border-black/10 last:border-0"
              >
                <td className="py-3 md:py-4 pr-4 align-top w-1/3 font-bold text-[#0A47B1]">
                  {category}
                </td>
                <td className="py-3 md:py-4 align-top text-sm md:text-base">
                  {details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Détails ancrés */}
      {items.map((item, i) => {
        const media = normalizeMedia(item);
        return (
          <article
            key={item.anchor || `${i}-${item.category}-detail`}
            id={item.anchor}
            className="scroll-mt-28"
          >
            <div className="grid gap-6 md:gap-8 md:grid-cols-2">
              {/* Texte */}
              <div className="bg-[#FDF3EF] rounded-xl border border-black/10 p-5 md:p-6 relative">
                <header className="mb-3 flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{item.category}</h3>
                  {item.tag && (
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(item.tag) ? item.tag : [item.tag]).map(
                        (t, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-xs rounded-full border border-black/60 bg-white"
                          >
                            {t}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </header>
                <div
                  className="text-sm md:text-base leading-relaxed text-black/85 whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: item.longText || item.details,
                  }}
                ></div>
              </div>

              {/* Galerie dynamique image/vidéo */}
              {media.length > 0 && (
                <div
                  className={`grid gap-4 ${
                    media.length === 1
                      ? "grid-cols-1"
                      : media.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-2 md:grid-cols-3"
                  }`}
                >
                  {media.map((m, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => openMedia(m)}
                      className="group relative aspect-square rounded-lg border border-black/10 bg-white/60 overflow-hidden focus:outline-none focus:ring-2 focus:ring-black"
                      title="Open media"
                    >
                      {m.type === "image" ? (
                        <img
                          src={m.src}
                          alt={`${item.category} ${idx + 1}`}
                          className="w-full h-full object-cover hover:cursor-pointer"
                        />
                      ) : (
                        <>
                          {/* Poster si fourni, sinon simple fond */}
                          {m.poster ? (
                            <img
                              src={m.poster}
                              alt={`${item.category} video ${idx + 1}`}
                              className="w-full h-full object-cover hover:cursor-pointer"
                            />
                          ) : (
                            <div className="w-full h-full grid place-items-center bg-black/5">
                              <span className="text-xs text-black/50">
                                Video
                              </span>
                            </div>
                          )}
                          {/* Play overlay */}
                          <span className="absolute inset-0 grid place-items-center hover:cursor-pointer">
                            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black/70 text-white transition group-hover:scale-105">
                              <HiPlay className="w-6 h-6 translate-x-[1px]" />
                            </span>
                          </span>
                        </>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </article>
        );
      })}

      {/* Lightbox */}
      {open && current && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm grid place-items-center p-4"
          onClick={close}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-3 -right-3 md:top-0 md:right-0 z-[101] inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/90 text-black shadow hover:bg-white hover:cursor-pointer"
              aria-label="Close"
            >
              <HiX className="w-5 h-5" />
            </button>

            <div className="bg-black/10 rounded-lg overflow-hidden p-0 md:p-2">
              {current.type === "image" ? (
                <img
                  src={current.src}
                  alt="media"
                  className="max-h-[80vh] w-auto mx-auto object-contain"
                />
              ) : current.src.includes("youtube") ||
                current.src.includes("youtu.be") ? (
                // YouTube embed
                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={
                      current.src.includes("embed")
                        ? current.src
                        : current.src
                            .replace("watch?v=", "embed/")
                            .replace("youtu.be/", "youtube.com/embed/")
                    }
                    title="video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : current.src.includes("vimeo.com") ? (
                // Vimeo embed
                <div className="w-full aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={
                      current.src.includes("player.vimeo.com")
                        ? current.src
                        : current.src.replace(
                            "vimeo.com/",
                            "player.vimeo.com/video/"
                          )
                    }
                    title="video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                // Fichier vidéo direct
                <video
                  src={current.src}
                  controls
                  className="max-h-[80vh] w-auto mx-auto"
                  poster={current.poster}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
