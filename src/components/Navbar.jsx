import { FaHome, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const activeColorClass = "text-[#FFD1B5]";

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isProjectsActive = isHome && window.location.hash === "#projects";

  const linkBase =
    "hover:text-orange-200 transition-colors focus:outline-none focus:ring-0";

  const handleProjectsClick = (e) => {
    e.preventDefault();
    navigate("/#projects");
    setTimeout(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("topSection")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <nav
      className="sticky top-0 inset-x-0 z-50 bg-black border-b border-gray-800
      px-3 py-3 md:px-6 md:py-6
      flex items-center justify-between gap-3
      text-[#FF914D]
      overflow-x-clip"
    >
      {/* Left: Home + nom (2 lignes en mobile, 1 ligne en desktop) */}
      <Link
        to="/"
        onClick={handleHomeClick}
        className={`flex items-center gap-2 ${linkBase} ${
          isHome ? activeColorClass : ""
        }`}
      >
        <FaHome className="w-5 h-5 md:w-6 md:h-6" />
        <span className="font-semibold leading-tight text-sm md:text-lg md:whitespace-nowrap truncate">
          <span className="block md:inline">Inès</span>
          <span className="block md:inline md:ml-1">Bouakkaoui</span>
        </span>
      </Link>

      {/* Right */}
      <div className="flex items-center justify-end gap-2 md:gap-4 text-s md:text-lg min-w-0 max-w-[70%] ">
        <a
          href="/#projects"
          onClick={handleProjectsClick}
          className={`${linkBase} ${isProjectsActive ? activeColorClass : ""}`}
        >
          Projects
        </a>

        <Link
          to="/about"
          className={`${linkBase} ${isAbout ? activeColorClass : ""} truncate`}
        >
          About me
        </Link>

        <a href="mailto:ines.bouakkaoui@gmail.com" className={linkBase}>
          <FaEnvelope className="w-4 h-4 md:w-6 md:h-6" />
        </a>
        <a
          href="https://github.com/inesbouakkaoui"
          target="_blank"
          rel="noopener noreferrer"
          className={linkBase}
        >
          <FaGithub className="w-4 h-4 md:w-6 md:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ines-bouakkaoui/"
          target="_blank"
          rel="noopener noreferrer"
          className={linkBase}
        >
          <FaLinkedin className="w-4 h-4 md:w-6 md:h-6" />
        </a>
      </div>
    </nav>
  );
}
