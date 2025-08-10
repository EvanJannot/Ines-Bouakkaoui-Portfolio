import rightImage from "../assets/HomePicture.svg";
import LinkedInLogo from "../assets/LinkedInLogo.svg";

export default function FooterSection() {
  return (
    <>
      <section
        className={[
          "relative text-black",
          "flex flex-col md:flex-row items-stretch justify-between",
          "px-4 sm:px-6 md:pl-16 md:pr-0",
          "pt-8 md:pt-0 pb-16 md:pb-0",
          "overflow-x-hidden",
        ].join(" ")}
      >
        {/* Partie gauche élargie */}
        <div className="flex-1 md:flex-[0.5] space-y-8 md:space-y-10">
          {/* Nom */}
          <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-bold leading-tight tracking-tight">
            let's work <br /> together
          </h1>

          {/* Postes sur la même ligne */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href="mailto:ines.bouakkaoui@gmail.com"
              className="text-base sm:text-2xl md:text-3xl px-4 sm:px-6 py-2 border border-black rounded-full flex items-center hover:bg-black hover:text-white transition"
            >
              ines.bouakkaoui@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ines-bouakkaoui/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
              aria-label="LinkedIn"
            >
              <img
                src={LinkedInLogo}
                alt="LinkedIn"
                className="w-20 h-10 sm:w-20 sm:h-10 md:w-60 md:h-32 object-contain"
              />
            </a>
          </div>

          <a
            href="#topSection"
            className="flex items-center gap-3 text-white font-semibold mt-6 sm:mt-8"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border border-white rounded-full">
              {/* Chevron Up SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>
            <span className="text-base sm:text-xl">Go up</span>
          </a>
        </div>
        {/* Partie droite */}
        <div className="hidden md:flex flex-1 md:flex-[0.5] mt-12 md:mt-0 justify-center">
          <img
            src={rightImage}
            alt="Visuel"
            className="w-full h-full max-w-none max-h-[850px] object-cover"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Scroll fluide pour toute la page */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
