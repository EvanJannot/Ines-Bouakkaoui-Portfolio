import { useMemo, useState } from "react";
import ProjectSummaryCard from "./ProjectSummaryCard";
import { PROJECTS } from "../data/projects";
import { useNavigate } from "react-router-dom";

const FILTERS = ["Technical Design", "Technical Art", "Programming", "All"];

export default function MyProjects() {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    const map = {
      "Technical Design": "Tech Design",
      "Technical Art": "Tech Art",
      Programming: "Programming",
    };
    const tag = map[active];
    return PROJECTS.filter((p) => p.tags.includes(tag));
  }, [active]);

  return (
    <section
      id="projects"
      className="max-w-8xl mx-auto px-4 md:px-20 py-10 md:py-14"
    >
      {/* Titre style “pilule” */}
      <div className="flex justify-center mb-6 md:mb-8">
        <h2
          className="px-6 md:px-10 py-2.5 md:py-3 rounded-full border-2 border-black bg-[#F7954A]
          text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight
          whitespace-nowrap"
        >
          My projects
        </h2>
      </div>

      {/* Filtres */}
      <div className="mb-8 md:mb-10">
        {/* Mobile: 1 ligne scrollable */}
        <div className="md:hidden overflow-x-auto whitespace-nowrap no-scrollbar px-1">
          <div className="flex items-center gap-2 min-w-max">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={[
                  "px-3 py-1.5 rounded-lg border border-black/40 bg-white/70 backdrop-blur-sm",
                  "text-sm font-medium transition shrink-0", // shrink-0 = reste sur 1 ligne
                  active === f ? "ring-2 ring-black" : "hover:bg-white",
                ].join(" ")}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        {/* Desktop: centré + espacé sur une ligne */}
        <div className="hidden md:flex items-center justify-center gap-4">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={[
                "px-4 py-2 rounded-lg border border-black/40 bg-white/70 backdrop-blur-sm",
                "text-base font-medium transition",
                active === f ? "ring-2 ring-black" : "hover:bg-white",
              ].join(" ")}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid des cartes */}
      <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProjectSummaryCard
            key={p.id}
            title={p.title}
            tags={p.tags}
            points={p.points}
            engineIcon={p.engineIcon}
            toolIcon={p.toolIcon}
            summary={p.summary}
            thumb={p.thumb}
            onMoreInfo={() => navigate(`/project/${p.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
