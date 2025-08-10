import { useParams, Link, useNavigate } from "react-router-dom";
import { getProjectById } from "../data/projects";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Toc from "../components/Toc";
import TocMobile from "../components/TocMobile";
import ContextSection from "../components/ContextSection";
import { FaGithub } from "react-icons/fa";
import NeedsSection from "../components/NeedsSection";
import ResultsSection from "../components/ResultsSection";
import WhatIDidSection from "../components/WhatIDidSection";
import FooterSignature from "../components/FooterSignature";

export default function Project() {
  const { id } = useParams();
  const project = getProjectById(id);
  const navigate = useNavigate();

  const backToProjects = (e) => {
    e.preventDefault();
    navigate("/"); // va sur Home
    // attend un tick pour que Home se monte, puis scrolle vers l’ancre
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  const handleNavigateToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="underline">
          ← Back to Home
        </Link>
      </div>
    );
  }

  const baseSections = [
    { id: "context", label: "Contexte" },
    { id: "needs", label: "Needs" },
    { id: "results", label: "Results" },
    { id: "what-i-did", label: "What I did" },
  ];

  const whatIDidSubsections = (project.whatIDidItems || []).map(
    ({ anchor, category }) => ({
      id: anchor,
      label: category,
    })
  );

  const sections = [...baseSections, ...whatIDidSubsections];

  const {
    title,
    year,
    repoUrl,
    duration,
    contextText,
    team,
    tools,
    contextMedia,
  } = project;

  return (
    <>
      <Navbar />
      <div className="max-w-8xl mx-auto px-6 py-10">
        {/* ===== Layout en 2 colonnes ===== */}
        <div className="grid grid-cols-[12px_1fr] md:grid-cols-[180px_1fr] gap-2">
          {/* Colonne gauche : TOC sticky */}
          <div>
            {/* Bouton mobile toujours visible */}
            <TocMobile
              sections={sections}
              onNavigate={handleNavigateToSection}
            />
            {/* TOC desktop visible dès md */}
            <div className="hidden md:block sticky top-24 self-start">
              <Toc sections={sections} offsetTop={96} activeColor="#FFF3EF" />
            </div>
          </div>

          {/* Colonne droite : contenu */}
          <div className="lg:pr-16">
            {/* Barre titre - année + GitHub */}
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-4 py-2 rounded-lg bg-black text-white font-semibold text-2xl">
                {title} {year ? `– ${year}` : ""}
              </span>

              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-black hover:bg-black hover:text-white transition-colors"
                  title="Open GitHub repository"
                >
                  <FaGithub size={45} />
                </a>
              )}
            </div>

            {/* Ligne Contexte (deux rectangles) */}
            <ContextSection
              title="Context"
              duration={duration}
              contextText={contextText}
              team={team}
              tools={tools}
              media={contextMedia}
            />

            <NeedsSection title="Needs" items={project.needs} />

            <ResultsSection
              title="Results"
              videoUrl={project.resultsVideo}
              images={project.resultsImages}
            />
            <WhatIDidSection items={project.whatIDidItems} />
          </div>
        </div>
      </div>
      {/* Bouton retour aux projets */}
      <div className="max-w-8xl mx-auto px-6 mt-12 mb-8 text-center">
        <Link
          to="/#projects"
          onClick={backToProjects}
          className="inline-block px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-white hover:text-black transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
      <FooterSignature />
    </>
  );
}
