import unrealLogo from "../assets/UnrealLogo.png";
import unityLogo from "../assets/UnityLogo.png";
import substanceLogo from "../assets/substanceLogo.svg";
import BlenderLogo from "../assets/BlenderLogo.png";
import Tien from "../assets/Tien.jpg";

export const PROJECTS = [
  {
    id: "enfants-lunes",
    title: "Enfants–Lunes",
    tags: ["Tech Design", "Tech Art"],
    points: ["Puzzle Game", "Team of 4", "Blueprint, UE 3D tools"],
    engineIcon: unrealLogo,
    toolIcon: null,
    contextMedia: Tien,
    summary: "Small resume of what I did",
    thumb: Tien,
    repoUrl: "https://github.com/collegebdeb/H25_JVII_gr01_Enfants-Lunes",
    duration: "2 months and 18 days",
    year: "2025",
    contextText:
      "Enfants-Lunes is a third-person exploration and puzzle game set in a dystopian underground civilization...",
    team: [
      "Nadia Rachid — UI Designer, Cinematics",
      "Noure Chafry — UI Artist, Level Designer",
      "Adam Nasr — 3D Artist, Level Designer, Cinematics",
      "Me — Generalist Designer, Tech Art, Cinematics",
    ],
    tools: ["Unreal Engine", "Blueprint", "Figma", "Blender"],
    needs: [
      {
        label: "Game design and pitch (documentation)",
        desc: "game without text, relying on visual storytelling and symbols.",
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
    resultsVideo: "https://www.youtube.com/watch?v=_T5f8cP532c",
    resultsImages: [
      { src: Tien, alt: "Gameplay 1" },
      { src: "/images/enfants-lunes/shot2.jpg", alt: "Gameplay 2" },
      { src: "/images/enfants-lunes/shot3.jpg", alt: "Gameplay 3" },
      { src: "/images/enfants-lunes/shot4.jpg", alt: "Gameplay 4" },
    ],
    whatIDidItems: [
      {
        anchor: "gameplay-mechanics",
        category: "Gameplay mechanics",
        details: "Laser emission & refraction / scripted events…",
        longText:
          "J’ai conçu et intégré…\n- Réfraction/émission\n- Triggers\n- Balancing…",
        tag: "Tech Design",
        media: [
          Tien,
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=_T5f8cP532c",
            poster: Tien,
          },
          "https://youtu.be/dQw4w9WgXcQ",
          { type: "image", src: Tien },
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
  {
    id: "lucy",
    title: "Lucy",
    tags: ["Tech Art"],
    points: ["3D AI generated model", "Solo", "Blender"],
    engineIcon: BlenderLogo,
    toolIcon: "",
    summary: "Small resume of the game",
    thumb: "",
  },
];

export const getProjectById = (id) => PROJECTS.find((p) => p.id === id);
