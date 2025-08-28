import Navbar from "../components/Navbar";
import FooterSignature from "../components/FooterSignature";
import Toc from "../components/Toc";
import TocMobile from "../components/TocMobile";
import AboutMeSection from "../components/AboutMeSection";
import MySkillsSection from "../components/MySkillsSection";
import IndustryInvolvmentSection from "../components/IndustryInvolvmentSection";
import TechExplorationSection from "../components/TechExplorationSection";

export default function AboutMe() {
  const handleNavigateToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "about-me", label: "About me" },
    { id: "my-skills", label: "My Skills" },
    { id: "industry-involvement", label: "Industry Involvement" },
    { id: "tech-exploration", label: "Tech Exploration" },
  ];
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
            <AboutMeSection title="About me" />

            <MySkillsSection title="My Skills" />

            <IndustryInvolvmentSection title="Industry Involvment" />

            <TechExplorationSection title="Tech Exploration" />
          </div>
        </div>
      </div>
      <FooterSignature />
    </>
  );
}
