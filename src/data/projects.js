import unrealLogo from "../assets/UnrealLogo.png";
import unityLogo from "../assets/UnityLogo.png";
import substanceLogo from "../assets/substanceLogo.svg";
import BlenderLogo from "../assets/BlenderLogo.png";
import banniereEnfantsLunes from "../assets/Enfants-Lunes/Splash_Enfants-Lunes.png";
import ELGameplay1 from "../assets/Enfants-Lunes/EL_Gameplay1.png";
import ELGameplay2 from "../assets/Enfants-Lunes/EL_Gameplay2.png";
import ELGameplay3 from "../assets/Enfants-Lunes/EL_Gameplay3.png";
import ELGameplay4 from "../assets/Enfants-Lunes/EL_Gameplay4.png";

export const PROJECTS = [
  {
    id: "enfants-lunes",
    title: "Enfants–Lunes",
    tags: ["Tech Design", "Tech Art"],
    points: ["Puzzle Game", "Team of 4", "Blueprint, UE 3D tools"],
    engineIcon: unrealLogo,
    toolIcon: null,
    contextMedia: banniereEnfantsLunes,
    summary: "Gameplay mechanics (laser puzzles), IA Enemies, Character & Animation integration, Shaders, Cinematics, Sound integration, Bugs fixing",
    thumb: banniereEnfantsLunes,
    repoUrl: "https://github.com/collegebdeb/H25_JVII_gr01_Enfants-Lunes",
    duration: "School project - took 2 months and 18 days",
    year: "2025",
    contextText:
      "Enfants-Lunes is a third-person exploration and puzzle game set in a dystopian underground civilization. The player takes on the role of Leila, a young woman who seeks to escape to the surface after discovering a secret about her people.",
    team: [
      "Nadia Rochdi — UI Designer, Cinematics",
      "Noure Chafry — UI Artist, Level Designer",
      "Adam Nasr — 3D Artist, Level Designer, Cinematics",
      "Me — Generalist Designer, Tech Art, Cinematics",
    ],
    tools: ["Unreal Engine", "Blueprint", "Canva/Figma", "Miro", "Notion"],
    needs: [
      {
        label: "Game design and pitch (documentation)",
        desc: "we decided to go with a game without text, relying on visual storytelling and symbols.",
      },
      {
        label: "Laser game mechanics",
        desc: "based on solar powers, refraction/emission, use light to activate mechanisms.",
      },
      {
        label: "Level design",
        desc: "balance between exploration and puzzles.",
      },
      {
        label: "UI and interaction system without text",
        desc: "minimalist but intuitive UI to guide the player.",
      },
      {
        label: "Artistic direction",
        desc: "ensure artistic vision and symbolic consistency.",
      },
    ],
    resultsVideo: "https://youtu.be/FwGjZGIe-u8",
    resultsImages: [
      { src: ELGameplay1, alt: "Gameplay 1" },
      { src: ELGameplay2, alt: "Gameplay 2" },
      { src: ELGameplay3, alt: "Gameplay 3" },
      { src: ELGameplay4, alt: "Gameplay 4" },
    ],
    whatIDidItems: [
      {
        anchor: "gameplay-mechanics",
        category: "Gameplay mechanics",
        details:
          "Laser emission & refraction / scripted events / grabbing objects / puzzles mechanics ",
        longText:
          "<strong> • Laser refraction/emission : </strong> \n Designed and implemented laser mechanics in Blueprints : materials, spawners, emission/refraction surfaces based on hit location. Integrated into the character’s hand (socket, added animation layer for aiming), aligned laser with camera movement, disabled camera-character collision for smoother control. Added event activation/deactivation through external objects, scripted stamina refill stations, and managed activation states. \n \n<strong>• Checkpoints </strong> \nDeveloped respawn points, storing/restoring stamina on death, added kill volumes for out-of-bounds detection, and implemented camera fade-out transitions on respawn. \n \n<strong>• Object grabbing :</strong> \n Scripted mechanics for grabbing objects with constant direction, distance, and orientation relative to the player. Integrated grabbing animation layer and socket attachment for consistent positioning.",
        tag: ["Tech Design", "Tech Art"],
        media: [
          banniereEnfantsLunes,
          {
            type: "video",
            src: "https://youtu.be/FwGjZGIe-u8",
            poster: banniereEnfantsLunes,
          },
          {
            type: "video",
            src: "https://youtu.be/FwGjZGIe-u8",
            poster: banniereEnfantsLunes
          },
          { type: "image", src: banniereEnfantsLunes },
        ],
      },
      {
        anchor: "ia-enemies",
        category: "IA Enemies",
        details: "Behavior trees, perception tweaks, navmesh tuning...",
      },
      {
        category: "Character & Animation",
        anchor: "character-animation",
        details:
          "Laser emission & refraction / Scripted events laser related / Grabbing objects",
      },
      {
        category: "Shaders",
        anchor: "shaders",
        details:
          "Laser emission & refraction / Scripted events laser related / Grabbing objects",
      },
      {
        category: "Cinematics",
        anchor: "cinematics",
        details:
          "Laser emission & refraction / Scripted events laser related / Grabbing objects",
      },
      {
        category: "Sound integration",
        anchor: "sound-integration",
        details:
          "Laser emission & refraction / Scripted events laser related / Grabbing objects",
      },
      {
        category: "Fixing bugs",
        anchor: "fixing-code",
        details:
          "Laser emission & refraction / Scripted events laser related / Grabbing objects",
      },
    ],
  },
  {
    id: "anim-integration",
    title: "Animation integration",
    tags: ["Tech Design", "Tech Art"],
    points: ["Technical animation", "Solo", "Blueprint"],
    engineIcon: unrealLogo,
    toolIcon: null,
    summary: "Small resume of what I did",
    thumb: "",
  },
  {
    id: "viral-nebula",
    title: "Viral Nebula",
    tags: ["Tech Design", "Programming"],
    points: ["Survival Game", "Solo", "C#"],
    engineIcon: unityLogo,
    toolIcon: null,
    summary: "Small resume of what I did",
    thumb: "",
  },
  {
    id: "mosaic",
    title: "Mosaic",
    tags: ["Tech Art"],
    points: ["Material", "Solo", "Substance Designer"],
    engineIcon: substanceLogo,
    toolIcon: unrealLogo,
    summary: "Small resume of what I did",
    thumb: "",
  },
  {
    id: "hyperconnected",
    title: "Hyperconnected",
    tags: ["Tech Design", "Tech Art"],
    points: ["Experimental Game", "Team of 4", "Blueprint, Shaders"],
    engineIcon: unrealLogo,
    toolIcon: null,
    summary: "Small resume of what I did",
    thumb: "",
  },
  {
    id: "sand-rock",
    title: "Sand rock",
    tags: ["Tech Art"],
    points: ["Material", "Solo", "Substance Designer"],
    engineIcon: substanceLogo,
    toolIcon: "",
    summary: "Small resume of what I did",
    thumb: "",
  },
  {
    id: "renaissance",
    title: "Renaissance",
    tags: ["Tech Design"],
    points: ["Game Jam Valleyfield", "Team of 5", "Blueprint"],
    engineIcon: unrealLogo,
    toolIcon: null,
    summary: "Small resume of what I did",
    thumb: "",
  },
  /*{
    id: "lucy",
    title: "Lucy",
    tags: ["Tech Art"],
    points: ["3D AI generated model", "Solo", "Blender"],
    engineIcon: BlenderLogo,
    toolIcon: "",
    summary: "Small resume of the game",
    thumb: "",
  },*/
];

export const getProjectById = (id) => PROJECTS.find((p) => p.id === id);
