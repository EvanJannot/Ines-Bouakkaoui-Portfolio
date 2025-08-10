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

      {/* Panneau latéral collé à gauche */}
      <div
        className={[
          "fixed top-28 left-0 z-50",
          "w-[180px] sm:w-[200px]",
          "transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="rounded-3xl bg-[#FFD1B5] text-black shadow-xl overflow-hidden ml-[-16px]">
          <div className="flex items-center justify-end p-3">
            <div className="flex-1 pl-3">
              <p className="text-xs font-extrabold uppercase tracking-wide">
                On this page
              </p>
              <hr className="border-black mt-1" />
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-black/15 hover:bg-white/25"
            >
              <HiX size={20} />
            </button>
          </div>

          <nav className="px-6 pb-6">
            {sections.map((s, i) => (
              <div key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(s.id);
                  }}
                  className="block py-3 font-bold tracking-tight"
                >
                  {s.label}
                </a>
                {i !== sections.length - 1 && (
                  <hr className="border-black/60" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
