import { useState } from "react";
import { HiChevronRight, HiX } from "react-icons/hi";

export default function TocMobile({ sections, onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);
    onNavigate?.(id);
  };

  return (
    <div className="md:hidden">
      {/* Bouton demi-cercle collé au bord */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open table of contents"
        className="fixed top-28 left-2 z-50 w-12 h-12 -translate-x-1/2 rounded-full bg-[#FFD1B5] border border-black shadow flex items-center justify-center pl-1"
      >
        <HiChevronRight size={24} className="text-black" />
      </button>

      {/* Overlay */}
      {open && (
        <button
          aria-label="Close overlay"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/30"
        />
      )}

      {/* Panneau latéral */}
      <div
        className={[
          "fixed top-28 left-1 z-50",
          "w-[160px] sm:w-[180px]", // réduit légèrement la largeur
          "transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-[110%]",
        ].join(" ")}
      >
        <div className="rounded-3xl bg-[#FFD1B5] text-black shadow-xl overflow-hidden ml-[-16px]">
          <div className="flex items-center justify-end pl-2 pt-2">
            <div className="flex-1 pl-2">
              <p className="text-[10px] font-extrabold uppercase tracking-wide">
                On this page
              </p>
              <hr className="border-black mt-1" />
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-black/15 hover:bg-white/25"
            >
              <HiX size={18} />
            </button>
          </div>

          <nav className="px-4 pb-2">
            {sections.map((s, i) => (
              <div key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(s.id);
                  }}
                  className="block py-2 text-[13px] font-semibold tracking-tight"
                >
                  {s.label}
                </a>
                {i !== sections.length - 1 && (
                  <hr className="border-black/40" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
