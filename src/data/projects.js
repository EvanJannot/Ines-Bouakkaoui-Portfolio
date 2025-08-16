import unrealLogo from "../assets/UnrealLogo.png";
import unityLogo from "../assets/UnityLogo.png";
import substanceLogo from "../assets/SubstanceLogo.svg";
import BlenderLogo from "../assets/BlenderLogo.png";

// Enfants-Lunes assets
import banniereEnfantsLunes from "../assets/Enfants-Lunes/Splash_Enfants-Lunes.png";
import ELGameplay1 from "../assets/Enfants-Lunes/EL_Gameplay1.png";
import ELGameplay2 from "../assets/Enfants-Lunes/EL_Gameplay2.png";
import ELGameplay3 from "../assets/Enfants-Lunes/EL_Gameplay3.png";
import ELGameplay4 from "../assets/Enfants-Lunes/EL_Gameplay4.png";
import BPLeila from "../assets/Enfants-Lunes/BP_Leila-EventGraph.png";
import BPGrabObject from "../assets/Enfants-Lunes/BP_Leila-GrabObjectsGraph.png";
import BPAIController from "../assets/Enfants-Lunes/AI_Controller_Gardes-EventGraph.png";
import BPSensedActor from "../assets/Enfants-Lunes/AI_Controller_Gardes-CanSenseActor.png";
import BPPatrolRoute from "../assets/Enfants-Lunes/BP_PatrolRoute-EventGraph.png";
import BTEnemies from "../assets/Enfants-Lunes/BT_Gardes-Behavior Tree.png";
import BTSubtreeEnemies from "../assets/Enfants-Lunes/BT_Subtree_SeekingState-Behavior Tree.png";

export const PROJECTS = [
  //Enfants-Lunes project
  {
    //Card
    id: "enfants-lunes",
    title: "Enfants–Lunes",
    tags: ["Tech Design", "Tech Art"],
    points: ["Puzzle Game", "Team of 4", "Blueprint, UE 3D tools"],
    engineIcon: unrealLogo,
    toolIcon: null,
    contextMedia: banniereEnfantsLunes,
    summary:
      "Gameplay mechanics (laser puzzles), IA Enemies, Character & Animation integration, Shaders, Cinematics, Sound integration, Bugs fixing",
    thumb: banniereEnfantsLunes,

    //Page
    repoUrl: "https://github.com/collegebdeb/H25_JVII_gr01_Enfants-Lunes",
    duration: "School project - took 2 months and 18 days",
    year: "2025",

    //Context
    contextText:
      "Enfants-Lunes is a third-person exploration and puzzle game set in a dystopian underground civilization. The player takes on the role of Leila, a young woman who seeks to escape to the surface after discovering a secret about her people.",
    team: [
      {
        name: "Nadia Rochdi",
        linkedin: "https://www.linkedin.com/in/nadia-rochdi-795001295/",
        roles: "UI Designer, Cinematics",
      },
      {
        name: "Noure Chafry",
        linkedin: "https://www.linkedin.com/in/nourechafry/",
        roles: "UI Artist, Level Designer",
      },
      {
        name: "Adam Nasr",
        linkedin: "",
        roles: "3D Artist, Level Designer, Cinematics",
      },
      {
        name: "Maxime Lefebvre",
        linkedin: "https://www.linkedin.com/in/maxime-lefebvre-938b57254/",
        roles: "Music Compositor",
      },
      {
        name: "Me",
        linkedin: "https://www.linkedin.com/in/ines-bouakkaoui/",
        roles: "Generalist Designer, Tech Art, Cinematics",
      },
    ],
    tools: ["Unreal Engine", "Blueprint", "Canva/Figma", "Miro", "Notion"],

    //Needs
    needs: [
      {
        label: "Creation of a prototype game from scratch",
        desc: null,
      },
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
      //Gameplay Mechanics
      {
        anchor: "gameplay-mechanics",
        category: "Gameplay mechanics",
        details:
          "Laser emission & refraction / scripted events / grabbing objects / puzzles mechanics ",
        longText:
          "<strong> • Laser refraction/emission : </strong> \n" +
          "Designed and implemented <strong>laser mechanics in Blueprints</strong> : materials, spawners, emission/refraction surfaces based on hit location. \n" +
          "<strong>Integrated into the character’s hand</strong> (socket, added animation layer for aiming), aligned laser with camera movement, disabled camera-character collision for smoother control. \n" +
          "<strong>Added event activation/deactivation</strong> through external objects, scripted stamina refill stations, and <strong>managed activation states.</strong> \n \n" +
          "<strong>• Checkpoints : </strong> \n" +
          "Developed <strong>respawn points</strong>, storing/restoring stamina on death, added kill volumes for out-of-bounds detection, " +
          "and implemented camera fade-out transitions on respawn. \n \n" +
          "<strong>• Object grabbing :</strong> \n Scripted mechanics <strong>using Physics constraints</strong> for grabbing " +
          "objects with <strong>constant direction, distance, and orientation relative to the player.</strong> Integrated grabbing animation layer and socket attachment for consistent positioning. \n\n" +
          "<strong>• Puzzles mechanics :</strong> \n" +
          "Contributed to <strong>scripting puzzle logic</strong>, including conditions for puzzle resolution, unlocking subsequent puzzles, and ensuring proper gameplay flow.",
        tag: ["Tech Design", "Tech Art"],
        media: [
          {
            //Video demo laser dans le niveau test
            type: "video",
            src: "https://youtu.be/GO4FGZarfxo",
          },
          {
            //Video demo laser dans le jeu
            type: "video",
            src: "https://youtu.be/wRVm_59AG9I",
          },
          BPLeila,

          {
            //Video demo des checkpoints & killvolume 
            type: "video",
            src: "https://youtu.be/Rr1VI_XE56I",
          },

          {
            //Video demo du grab objects
            type: "video",
            src: "https://youtu.be/GZBp-W-4V_Q",
          },
          BPGrabObject,
        ],
      },

      //IA Enemies
      {
        anchor: "ia-enemies",
        category: "IA Enemies",
        details:
          "Behavior Trees / spline-based patrols / player chase & capture / search & investigate / sound detection",
        longText:
          "Designed and implemented <strong>enemy behaviors using Behavior Trees</strong>, enabling dynamic state transitions and decision-making. \n\n " +
          "Blueprints of <strong>spline-based patrol paths</strong>, player chase on sight, and <strong>capture mechanics triggering respawn</strong> at the last checkpoint. \n\n " +
          "Integrated <strong>loss-of-sight logic with Environment Queries for localized search behavior</strong>, and developed <strong>sound sensitivity</strong> systems to trigger investigation when noise is detected.",
        tag: ["Tech Design"],
        media: [
          {
            //Video demo ennemis dans le niveau test
            type: "video",
            src: "https://youtu.be/f9BoEczklvY",
          },
          BPAIController,
          BPSensedActor,
          BTEnemies,
          BTSubtreeEnemies,
          BPPatrolRoute,
        ]


      },

      //Character & Animation
      {
        category: "Character & Animation",
        anchor: "character-animation",
        details:
          "Metahuman creation & integration / rig & mesh modifications / animation retargeting & refinement / Animation Blueprint setup",
        longText:
          "<strong>• Character creation & Integration : </strong>" +
          "\n Integration of the Sparrow asset from the Paragon franchise, modified the rig and mesh in Unreal Engine 5 to remove the face and unnecessary elements (bow, cape, etc.)." +
          " Created a custom character by generating a Metahuman and masked neck area, and merged the Metahuman face onto the Sparrow rig in the Character Blueprint." +
          "Adjusted ground shadow rendering (mesh bounds scale) and customized clothing material colors to align with the art direction. \n\n" +
          "<strong>• Animation integration : </strong> \nImported animations from Mixamo, retargeted them to the custom rig, and refined facial animations for the Metahuman." +
          "Corrected animation artifacts, created animation montages and layered animation sequences, and configured the Animation Blueprint (Anim Graph, Event Graph, and state machines)" +
          " for seamless gameplay integration.",
        tag: ["Tech Design", "Tech Art"],
      },

      //Shaders & Materials
      {
        category: "Shaders & Materials",
        anchor: "shaders",
        details:
          "Laser material / outline shader / placement indicator shader / reusable Actor Component / World Align material base",
        longText:
          "Developed custom materials including a laser material, an outline shader for grabbable assets, and a placement indicator shader for object positioning. " +
          "Scripted the triggering of the placement indicator in Level Blueprint \n\n" +
          "Created a reusable Actor Component in Blueprint to automate shader application: automatically retrieved the mesh and its attached collision sphere, applied the appropriate " +
          "shader, and handled player-overlap events for interactive feedback. \n\n" +
          "Created a World Align material base for the level artists.",
        tag: ["Tech Design", "Tech Art"],
      },

      //Cinematics
      {
        category: "Cinematics",
        anchor: "cinematics",
        details:
          "Level Blueprint triggers / tutorial door-opening / guard-blockade / library lever fix / crystal-door sequence / gear puzzle fix",
        longText:
          "Scripted the triggering of cinematics within the Levels Blueprints to ensure seamless integration with gameplay events. \n\n" +
          "Developed the door-opening cinematic triggered after solving the tutorial puzzle at the start of the game. \n\n" +
          "Produced the guard-blockade cinematic in the library to visually communicate to the player that the main passage is blocked, prompting them to find an alternate path.\n\n" +
          "Corrected the cinematic triggered after the player pulls the lever in the library. \n\n" +
          "Designed the crystal-door cinematic, activated when the player fires the laser at the crystal long enough to unlock the path to the gear room. \n\n" +
          "Improved the first gear puzzle cinematic by synchronizing sound with the falling object and fixing a bug where the gear could remain stuck, " +
          "ensuring consistent visual and audio feedback.",
        tag: ["Tech Design", "Tech Art"],
      },

      //Sound integration
      {
        category: "Sound integration",
        anchor: "sound-integration",
        details:
          "Original soundtrack integration / ambient loops / spatialized flames & machinery / Audio Listener setup / stamina refill SFX",
        longText:
          "Integrated original soundtrack composed by Maxime, working closely with him to implement ambient loops. \n\n" +
          "Added spatialized sound effects for flames (placed by level artists in the level) and gear machinery to enhance environmental immersion. \n\n" +
          "Scripted the Audio Listener setup to ensure accurate spatial audio positioning relative to the player. \n\n" +
          "Implemented and scripted the sound effects for stamina refill, including playback during the refill process and a distinct sound at completion.",
        tag: ["Tech Design"],
      },

      //Debug
      {
        category: "Debug",
        anchor: "debug",
        details:
          "Interaction prompt fix / stamina UI fix / input lock in intro cinematic / gear puzzle fix / EU pipeline crash fix",
        longText:
          "Fixed interaction feedback (“E” prompt) remaining on screen due to object trigger logic. \n\n" +
          "Corrected stamina UI animation behavior after a refill. \n\n" +
          "Disabled player inputs during the introduction cinematic to maintain immersion. \n\n" +
          "Fixed the gear puzzle logic in the library’s Level Blueprint to ensure proper functionality. \n\n" +
          "Fixed the EU pipeline that was crashing the build.",
        tag: ["Tech Design"],
      },
    ],
  }, //Fin Enfants-Lunes

  // Projets Intégration d'animations
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
