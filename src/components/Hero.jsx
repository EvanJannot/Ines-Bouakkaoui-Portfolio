import unrealLogo from "../assets/UnrealLogo.png";
import rightImage from "../assets/HomePicture.svg";

export default function HeroSection() {
  return (
    <section
      id="topSection"
      className={[
        "relative text-black",
        "flex flex-col md:flex-row items-stretch",
        "px-4 md:pl-16 md:pr-0",
        "pt-6 md:pt-0 pb-0 md:pb-0",
      ].join(" ")}
    >
      {/* Partie gauche élargie */}
      <div className="flex-1 md:flex-[0.55] space-y-8 md:space-y-10">
        {/* Nom */}
        <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-bold leading-[0.95] tracking-tight pt-2 md:pt-35">
          inès <br /> bouakkaoui
        </h1>

        {/* Rôles */}
        <div className="flex gap-3 sm:gap-4 md:gap-8 flex-wrap">
          {["technical designer", "technical artist", "programmer"].map(
            (role) => (
              <p
                key={role}
                className="text-base sm:text-lg md:text-3xl px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 border border-black rounded-full"
              >
                {role}
              </p>
            )
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center gap-8 pt-0 md:pt-12">
          <img
            src={unrealLogo}
            alt="Unreal Engine"
            className="w-32 h-16 md:w-60 md:h-32 object-contain"
          />
        </div>
      </div>
      {/* Partie droite */}
      <div className="hidden md:flex flex-1 md:flex-[0.45] mt-12 md:mt-0 justify-center">
        <img
          src={rightImage}
          alt="Visuel"
          className="w-full h-full max-w-none max-h-[850px] object-cover"
        />
      </div>
    </section>
  );
}
