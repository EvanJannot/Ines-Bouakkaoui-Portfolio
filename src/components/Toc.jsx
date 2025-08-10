import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Toc({
  sections,
  offsetTop = 96,
  activeColor = "#FFF3EF",
}) {
  const location = useLocation();
  const [active, setActive] = useState(sections?.[0]?.id ?? "");

  // 1) Suivre le hash de l'URL
  useEffect(() => {
    const h = (location.hash || "").replace("#", "");
    if (h) setActive(h);
    else if (sections?.length) setActive(sections[0].id);
  }, [location.hash, sections]);

  // 2) Clic: mettre le hash + scroll smooth
  const handleClick = (e, id) => {
    e.preventDefault();
    // Met le hash -> mettra à jour location.hash (et donc 'active')
    window.location.hash = id;

    // Scroll en douceur et compense la navbar sticky
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - offsetTop;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav className="hidden md:block sticky" style={{ top: offsetTop }}>
      <h4 className="text-sm font-extrabold tracking-wide mb-3">
        ON THIS PAGE
      </h4>
      <ul className="space-y-3">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => handleClick(e, s.id)}
                className="block font-semibold"
                style={{ color: isActive ? activeColor : "inherit" }}
              >
                <span
                  className="inline-block mr-2 align-middle"
                  style={{
                    width: 2,
                    height: 18,
                    background: isActive ? activeColor : "transparent",
                  }}
                />
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
