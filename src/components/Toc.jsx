import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Toc({
  sections,
  offsetTop = 96, // hauteur de la navbar
  activeColor = "#FFF3EF",
}) {
  const location = useLocation();
  const [active, setActive] = useState(sections?.[0]?.id ?? "");
  const obsRef = useRef(null);

  // 1) Suivre le hash de l'URL au chargement / navigation
  useEffect(() => {
    const h = (location.hash || "").replace("#", "");
    if (h) setActive(h);
    else if (sections?.length) setActive(sections[0].id);
  }, [location.hash, sections]);

  // 2) Scroll spy avec IntersectionObserver
  useEffect(() => {
    const ids = sections?.map((s) => s.id).filter(Boolean) ?? [];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    // Détruit un éventuel observer précédent
    if (obsRef.current) obsRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        // On prend la section la plus visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          const id = visible.target.id;
          setActive((prev) => (prev !== id ? id : prev));
          // met à jour l'URL sans remonter la page
          window.history.replaceState({}, "", `#${id}`);
        }
      },
      {
        root: null,
        // marge haute = navbar ; marge basse = “zone d’activation” (~60% bas)
        rootMargin: `-${offsetTop}px 0px -60% 0px`,
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach((el) => observer.observe(el));
    obsRef.current = observer;
    return () => observer.disconnect();
  }, [sections, offsetTop]);

  // 3) Clic: push hash + scroll smooth compensé
  const handleClick = (e, id) => {
    e.preventDefault();
    // ne pas laisser le browser “sauter”, on gère le scroll manuellement
    window.history.replaceState({}, "", `#${id}`);

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
