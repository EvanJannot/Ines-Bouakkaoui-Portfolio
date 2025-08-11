import unrealLogo from "../assets/UnrealLogo.png";
import unityLogo from "../assets/UnityLogo.png";
import substanceLogo from "../assets/substanceLogo.svg";
import BlenderLogo from "../assets/BlenderLogo.png";
import banniereEnfantsLunes from "../assets/Enfants-Lunes/Splash_Enfants-Lunes.png";
import ELGameplay1 from "../assets/Enfants-Lunes/EL_Gameplay1.png"
import ELGameplay2 from "../assets/Enfants-Lunes/EL_Gameplay2.png"
import ELGameplay3 from "../assets/Enfants-Lunes/EL_Gameplay3.png"
import ELGameplay4 from "../assets/Enfants-Lunes/EL_Gameplay4.png"

export const PROJECTS = [
  {
    id: "enfants-lunes",
    title: "Enfants–Lunes",
    tags: ["Tech Design", "Tech Art"],
    points: ["Puzzle Game", "Team of 4", "Blueprint, UE 3D tools"],
    engineIcon: unrealLogo,
    toolIcon: null,
    contextMedia: banniereEnfantsLunes,
    summary: "Small resume of what I did",
    thumb: banniereEnfantsLunes,
    repoUrl: "https://github.com/collegebdeb/H25_JVII_gr01_Enfants-Lunes",
    duration: "School project - took 2 months and 18 days",
    year: "2025",
    contextText:
      "Enfants-Lunes is a third-person exploration and puzzle game set in a dystopian underground civilization. The player takes on the role of Leila, a young woman who seeks to escape to the surface after discovering a secret about her people.",
    team: [
      "Nadia Rachid — UI Designer, Cinematics",
      "Noure Chafry — UI Artist, Level Designer",
      "Adam Nasr — 3D Artist, Level Designer, Cinematics",
      "Me — Generalist Designer, Tech Art, Cinematics",
    ],
    tools: ["Unreal Engine", "Blueprint", "Canva/Figma", "Miro", "Notion"],
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
        details: "Laser emission & refraction / scripted events / grabbing objects / puzzles mechanics ",
        longText:
          "• Laser refraction/emission :** \n Blueprints for \n• Triggers\n• Balancing…",
        tag: ["Tech Design", "Tech Art"],
        media: [
          banniereEnfantsLunes,
          {
            type: "video",
            src: "https://www.youtube.com/watch?v=_T5f8cP532c",
            poster: banniereEnfantsLunes,
          },
          "https://youtu.be/dQw4w9WgXcQ",
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
