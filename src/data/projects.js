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
// EL Gameplay
import BPLeila from "../assets/Enfants-Lunes/BP_Leila-EventGraph.png";
import BPGrabObject from "../assets/Enfants-Lunes/BP_Leila-GrabObjectsGraph.png";
import BPAIController from "../assets/Enfants-Lunes/AI_Controller_Gardes-EventGraph.png";
import BPSensedActor from "../assets/Enfants-Lunes/AI_Controller_Gardes-CanSenseActor.png";
import BPPatrolRoute from "../assets/Enfants-Lunes/BP_PatrolRoute-EventGraph.png";
import BTEnemies from "../assets/Enfants-Lunes/BT_Gardes-Behavior Tree.png";
import BTSubtreeEnemies from "../assets/Enfants-Lunes/BT_Subtree_SeekingState-Behavior Tree.png";
// EL Char & Anim
import ABPAnimGraph from "../assets/Enfants-Lunes/ABP_Leila-AnimGraph.png";
import ABPEventGraph from "../assets/Enfants-Lunes/ABP_Leila-EventGraph.png";
import StateMachine from "../assets/Enfants-Lunes/AnimGraphNode_StateMachine_1-Main States.png";
import BPLeilaViewport from "../assets/Enfants-Lunes/BP_Leila_MeshAndFace.png";
import Skeleton from "../assets/Enfants-Lunes/Sparrow_Skeleton_Outfit.PNG";
import LeilaFace from "../assets/Enfants-Lunes/Leila_FaceMesh.png";
//EL Shaders & Mat
import ACOutliner from "../assets/Enfants-Lunes/AC_OutlinerEffect-EventGraph.png";
import HiglightPosition from "../assets/Enfants-Lunes/Library_Gameplay-EventGraph.png";
import WorldAlign from "../assets/Enfants-Lunes/MaterialGraph-M_WA_Base.png";
import MLaser from "../assets/Enfants-Lunes/MaterialGraph-M_Laser.png";
import MInstanceLaser from "../assets/Enfants-Lunes/MI_Laser.png";
//EL Cinematics
import ScriptCinematic from "../assets/Enfants-Lunes/Library_Gameplay-EventGraph_Engrenages.png";
//EL Sound integration
import MainLevelSound from "../assets/Enfants-Lunes/Main_global-EventGraph.png";
import BPRefillStamina from "../assets/Enfants-Lunes/BP_RefillStamina-EventGraph.png";
import MSSLibrary from "../assets/Enfants-Lunes/MSS_Library-MetasoundEditorGraph.png";
//EL Debug
import RefillAnim from "../assets/Enfants-Lunes/WB_Stamina-EventGraph.png";
import PipelineBug from "../assets/Enfants-Lunes/PipelineBug.PNG";

//Animation integration project
import animationThumb from "../assets/Animation-integration/animation_thumb.PNG";
import DummyABP from "../assets/Animation-integration/ABP_Dummy-AnimGraph.png";
import EventGraph_IdleBreakers from "../assets/Animation-integration/ABP_Dummy-EventGraph_IdleBreakers.png";
import ABP_EventGraph from "../assets/Animation-integration/ABP_Dummy-EventGraph.png";
import DummyStateMachine from "../assets/Animation-integration/AnimGraphNode_StateMachine_0-Locomotion.png";
import dancefloor from "../assets/Animation-integration/BP_PisteDanse-EventGraph.png";
import BP_Dummy from "../assets/Animation-integration/BP_ThirdPersonCharacter-EventGraph.png";
import IdleBreakers from "../assets/Animation-integration/Idle_Breakers.PNG";
import DummyAttackMontage from "../assets/Animation-integration/attack_anim_montage.PNG"
import TrackingFeet from "../assets/Animation-integration/ABP_Dummy-TracagePieds.png";
import PrintInfosFct from "../assets/Animation-integration/ABP_Dummy-PrintInfos.png";


//Mosaic project
import MosaicShowcase from "../assets/Mosaic/mosaic_showcase.png";
import MosaicVersions from "../assets/Mosaic/mosaic_multiple_versions.png";
import ShapesGraph from "../assets/Mosaic/shapes_graph.png";
import MosaicGraph from "../assets/Mosaic/mosaic_graph.png";
import Parameters1 from "../assets/Mosaic/parameters1.PNG";
import Parameters2 from "../assets/Mosaic/parameters2.PNG";
import Parameters3 from "../assets/Mosaic/parameters3.PNG";
import Parameters4 from "../assets/Mosaic/parameters4.PNG";

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
      " - Gameplay mechanics (laser puzzles)\n - IA Enemies \n - Character & Animation integration \n - Shaders\n - Cinematics\n - Sound integration\n - Debug (UI)",
    thumb: banniereEnfantsLunes,

    //Page
    repoUrl: "https://github.com/collegebdeb/H25_JVII_gr01_Enfants-Lunes",
    duration: "School project - took 2 months and 18 days",
    year: "2025",

    //Context
    contextText:
      "Enfants-Lunes is a school project where our team had to <strong>design and prototype a game from scratch.</strong> " +
      "The objective was to create a fully functional prototype, covering ideation, game design, and implementation within a limited timeframe. \n\n" +
      "Enfants-Lunes is a <strong>third-person exploration and puzzle game</strong> set in a dystopian underground civilization." +
      "The player takes on the role of Leila, a young woman who seeks to escape to the surface after discovering a secret about her people.",
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
        linkedin: "https://www.linkedin.com/in/adam-nasr-29a76434a/",
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
    tools: ["Unreal Engine 5", "Blueprint", "Canva/Figma", "Miro", "Notion"],

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
          "Laser emission & refraction / checkpoints / scripted events / grabbing objects / puzzles mechanics ",
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
          "\n Integration of the Sparrow asset from the Paragon franchise, <strong>modified the rig and mesh in Unreal Engine 5</strong> to remove the face and unnecessary elements (bow, cape, etc.).\n" +
          " Created a custom character by <strong>generating a Metahuman</strong> and masked neck area, and <strong>merged the Metahuman face onto the Sparrow rig in the Character Blueprint.</strong> \n" +
          "Adjusted ground shadow rendering (mesh bounds scale) and customized clothing material colors to align with the art direction. \n\n" +
          "<strong>• Animation integration : </strong> \nImported animations from Mixamo, <strong>retargeted them to the custom rig</strong>, and refined facial animations for the Metahuman." +
          "\nCorrected animation artifacts, created <strong>animation montages and layered animation sequences</strong>, and <strong>configured the Animation Blueprint</strong> (Anim Graph, Event Graph, and state machines)" +
          " for seamless gameplay integration.",
        tag: ["Tech Design", "Tech Art"],
        media: [
          ABPAnimGraph,
          ABPEventGraph,
          StateMachine,
          BPLeilaViewport,
          Skeleton,
          LeilaFace,
        ]
      },

      //Shaders & Materials
      {
        category: "Shaders & Materials",
        anchor: "shaders",
        details:
          "Laser material / outline shader / placement indicator shader / reusable Actor Component / World Align material base",
        longText:
          "Developed custom materials including a <strong>laser material, an outline shader for grabbable assets, and a placement indicator shader for object positioning.</strong> " +
          "Scripted the triggering of the placement indicator in Level Blueprint \n\n" +
          "Scripted the <strong>crystal behavior to gradually change its color when pointed at with the laser</strong>, providing visual feedback to the player.\n\n" +
          "Created a <strong>reusable Actor Component in Blueprint to automate shader application:</strong> automatically retrieved the mesh and its attached collision sphere, applied the appropriate " +
          "shader, and handled player-overlap events for interactive feedback. \n\n" +
          "Created a <strong>World Align material base</strong> for the level artists.",
        tag: ["Tech Design", "Tech Art"],
        media: [
          {
            //Video demo utilisation outliner
            type: "video",
            src: "https://youtu.be/229KhZ-T9mM",
          },
          ACOutliner,
          HiglightPosition,
          WorldAlign,
          MLaser,
          MInstanceLaser,

        ]

      },

      //Cinematics
      {
        category: "Cinematics",
        anchor: "cinematics",
        details:
          "Level Blueprint triggers / tutorial door-opening / guard-blockade / library lever fix / crystal-door sequence / gear puzzle fix",
        longText:
          "<strong>Scripted the triggering of cinematics</strong> within the Levels Blueprints to ensure seamless integration with gameplay events. \n\n" +
          "Developed the <strong>door-opening cinematic</strong> triggered after solving the tutorial puzzle at the start of the game. \n\n" +
          "Produced the <strong>guard-blockade cinematic</strong> in the library to visually communicate to the player that the main passage is blocked, prompting them to find an alternate path.\n\n" +
          "Corrected the <strong>cinematic triggered after the player pulls the lever</strong> in the library. \n\n" +
          "Designed the <strong>crystal-door cinematic</strong>, activated when the player fires the laser at the crystal long enough to unlock the path to the gear room. \n\n" +
          "Improved the <strong>first gear puzzle cinematic</strong> by synchronizing sound with the falling object and fixing a bug where the gear could remain stuck, " +
          "ensuring consistent visual and audio feedback.",
        tag: ["Tech Design", "Tech Art"],
        media: [
          {
            //Video demo cinematics
            type: "video",
            src: "https://youtu.be/p1LuvTpFyXc",
          },
          ScriptCinematic,
        ]
      },

      //Sound integration
      {
        category: "Sound integration",
        anchor: "sound-integration",
        details:
          "Original soundtrack integration / ambient loops / spatialized flames & machinery / Audio Listener setup / stamina refill SFX",
        longText:
          "Integrated original soundtrack composed by Maxime, working closely with him to <strong>implement ambient loops.</strong> \n\n" +
          "Added <strong>spatialized sound effects</strong> for flames (placed by level artists in the level) and gear machinery to enhance environmental immersion. \n\n" +
          "Scripted the <strong>Audio Listener setup to ensure accurate spatial audio positioning relative to the player.</strong> \n\n" +
          "<strong>Implemented and scripted the sound effects</strong>, like for stamina refill, including playback during the refill process and a distinct sound at completion.",
        tag: ["Tech Design"],
        media: [
          {
            type: "video",
            src: "https://youtu.be/Qj68UsJq3JA",
          },
          MainLevelSound,
          BPRefillStamina,
          MSSLibrary
        ]
      },

      //Debug
      {
        category: "Debug",
        anchor: "debug",
        details:
          "Interaction prompt fix / stamina UI fix / input lock in intro cinematic / gear puzzle fix / EU pipeline crash fix",
        longText:
          "<strong>Fixed interaction feedback (“E” prompt)</strong> remaining on screen due to object trigger logic. \n\n" +
          "Corrected <strong>stamina UI animation</strong> behavior after a refill. \n\n" +
          "Disabled player inputs during the introduction cinematic to maintain immersion. \n\n" +
          "Found out that the <strong>UE pipeline was crashing the build.</strong> Figured out we have to delete it in the files when it is generated.",
        tag: ["Tech Design"],
        media: [
          RefillAnim,
          PipelineBug,
        ]
      },
    ],
  }, //Fin Enfants-Lunes

  // Projet 2 : Intégration d'animations
  {
    id: "anim-integration",
    title: "Animation integration",
    tags: ["Tech Design", "Tech Art"],
    points: ["Technical animation", "Solo", "Blueprint"],
    engineIcon: unrealLogo,
    toolIcon: null,
    summary: "- Idle & locomotion system\n - Inputs & movements\n - Animation montages \n - Emotes \n - IK Rig",
    thumb: animationThumb,

    //Page
    repoUrl: null,
    duration: "School project - took 1 month",
    year: "2024",

    //Context
    contextMedia: animationThumb,
    contextText:
      " As a solo school project, I had to <strong> integrate and finalize an interactive character</strong> inside Unreal Engine 5. \n\n" +
      "The project was split into two parts: \n" +
      "• <strong> Part I : </strong> setting up <strong>idle animations, idle breakers, and locomotion</strong> (walk, run, sprint). \n" +
      "• <strong> Part II : </strong> expanding with <strong>jumping, crouching, montages (attack + dances), custom emote</strong>, and <strong>IK feet placement</strong>. \n\n" +
      "The goal was to learn how to <strong>set up an Animation Blueprint</strong>, handle transitions, and ensure smooth player feedback.",
    team: [
      {
        name: "Me",
        linkedin: "https://www.linkedin.com/in/ines-bouakkaoui/",
        roles: "Tech Designer, Tech Art",
      },
    ],
    tools: ["Unreal Engine 5", "Blueprint",],

    //Needs
    needs: [
      {
        label: "Idle & locomotion system",
        desc: "implement idle states, random idle breakers, walk/run/sprint cycles with correct speeds and direction.",
      },
      {
        label: "Expanded movements",
        desc: "jumping with anticipation, falling logic, crouching toggle with proper capsule resizing.",
      },
      {
        label: "Animation montages",
        desc: "magical attack triggered on input, dance emotes triggered on a blueprint dance floor.",
      },
      {
        label: "Polish & realism",
        desc: "integrate IK rig for accurate foot placement on uneven ground.",
      },
      {
        label: "Feedback & debugging",
        desc: "show live print values (speed, direction, idle index, crouch state, etc.) and implement a debug mode for foot sliding.",
      },
    ],

    //Results
    resultsVideo: "https://youtu.be/rELvYJ1atFo",

    whatIDidItems: [
      //Gameplay Mechanics
      {
        anchor: "idle-locomotion",
        category: "Idle & locomotion",
        details:
          "Blendspace 2D / idle breakers / direction transitions ",
        longText:
          "• Created a <strong>Blendspace 2D</strong> mixing idle, walk, run, and sprint. \n\n" +

          "• Integrated <strong>3 idle breakers</strong> triggered randomly after inactivity. \n\n" +

          "• Configured speed thresholds (150 cm/s walk, 450 cm/s run, 600 cm/s sprint) and handled smooth direction transitions.",

        tag: ["Tech Design", "Tech Art"],
        media: [
          {
            //Video
            type: "video",
            src: "https://youtu.be/H8IOdGG5qrE",
          },
          IdleBreakers,
          EventGraph_IdleBreakers,
          DummyStateMachine,

        ],
      },

      //Animation montages & emotes
      {
        anchor: "anim-emotes",
        category: "Animation montages & emotes",
        details:
          "Magic attack / dance floor Blueprint ",
        longText:
          "• Added a <strong>magical attack montage</strong> (upper body only, triggered with left click / controller trigger). \n\n" +

          "• Created a <strong>dance floor Blueprint</strong> reusable with different dance animations and musics.",

        tag: ["Tech Design", "Tech Art"],
        media: [
          DummyAttackMontage,
          dancefloor,
          BP_Dummy,
        ],
      },

      //IK Rig foot placement
      {
        anchor: "ik-rig",
        category: "IK Rig foot placement",
        details:
          "IK Rig (feet and pelvis)",
        longText:
          "• Implemented <strong>IK corrections</strong> for both feet and pelvis, ensuring the character adapts naturally to slopes and uneven terrain.",

        tag: ["Tech Design", "Tech Art"],
        media: [
          DummyABP,
          ABP_EventGraph,
          TrackingFeet,

        ],
      },

      //Jump & crouch mechanics
      {
        anchor: "mechanics",
        category: "Jump & crouch mechanics",
        details:
          "Anticipation delays for jumps / crouch toggle",
        longText:
          "• Integrated <strong>jump states with anticipation delay for jumps</strong> and proper fall detection using <strong>OnLanded events</strong>. \n\n" +
          "• Implemented <strong>crouch toggle</strong> with speed reduction and capsule resize.",

        tag: ["Tech Design"],
        media: [
          BP_Dummy,
          StateMachine,
        ],
      },

      //Inputs and debugs
      {
        anchor: "inputs-debug",
        category: "Inputs & debugging",
        details:
          "Blendspace 2D / idle breakers / direction transitions ",
        longText:
          "• Added input mappings for <strong>Sprint</strong> and <strong>Debug toggle.</strong> \n\n" +

          "• Scripted a <strong>PrintInfos function</strong> showing idle index, speed, direction, and inactivity timer.",

        tag: ["Tech Design"],
        media: [
          PrintInfosFct,
        ],
      },

    ]
  },

  {
    id: "mosaic",
    title: "Mosaic",
    tags: ["Tech Art"],
    points: ["Material", "Solo", "Substance Designer"],
    engineIcon: substanceLogo,
    toolIcon: unrealLogo,
    summary: "- Procedural material \n - Customizable wear parameters \n - Unreal Engine integration",
    thumb: MosaicShowcase,

    //Page
    repoUrl: null,
    duration: "School project - took 1 month",
    year: "2025",

    //Context
    contextMedia: MosaicVersions,
    contextText:
      "This mosaic is an individual school project for the Procedural Tools course. \n" +
      "The objective was to create a <strong>procedural and parameterized material</strong> in Substance Designer, " +
      "based on a tiling structure. The material had to include a <strong>global wear parameter and be fully customizable</strong>, " +
      "then integrated into Unreal Engine 5 with both a normal and a deteriorated version.",
    team: [
      {
        name: "Me",
        linkedin: "https://www.linkedin.com/in/ines-bouakkaoui/",
        roles: "Tech Art",
      },
    ],
    tools: ["Substance Designer", "Unreal Engine",],

    //Needs
    needs: [
      {
        label: "Procedural tiling material",
        desc: "build a mosaic-like material using Tile Sampler/Flood Fill nodes.",
      },
      {
        label: "Wear parameter",
        desc: "expose a global wear slider controlling cracks, chips and dirt buildup.",
      },
      {
        label: "Intuitive customization",
        desc: "provide at least 5 parameters such as color, size, variation and wear.",
      },
      {
        label: "Integration in Unreal",
        desc: "import the Substance graph and create normal and deteriorated instances.",
      },
      {
        label: "Clean graph structure",
        desc: "organize nodes with clear naming and comments.",
      },
    ],

    //Results
    resultsVideo: "https://youtu.be/JqVL09kwadI",
    resultsImages: [
      { src: MosaicGraph, alt: "Mosaic graph" },
      { src: ShapesGraph, alt: "Shapes Graph" },
    ],

    whatIDidItems: [
      //Pattern creation
      {
        anchor: "pattern",
        category: "Pattern creation",
        details:
          "Tile Sampler & Flood Fill / procedural shapes / random variation",
        longText:
          "Created <strong>base patterns</strong> for the mosaic using <strong>Tile Sampler and Flood Fill</strong>. \n" +
          "Designed multiple <strong>geometric tile shapes</strong>, with randomness in orientation, scale and distribution.",
        tag: ["Tech Art"],
        media: [
          ShapesGraph,
          MosaicGraph,
        ],
      },

      //Procedural wear
      {
        anchor: "wear",
        category: "Procedural wear",
        details:
          "Global wear parameter / cracks & chips / dirt accumulation",
        longText:
          "Implemented a <strong>global wear slider</strong> that simultaneously <strong>drives cracks, chipped edges and dirt masks</strong>, " +
          "blending multiple effects for realistic <strong>progressive deterioration.</strong>",
        tag: ["Tech Art"],
        media: [
          MosaicGraph,
        ],
      },

      //Parameters
      {
        anchor: "parameters",
        category: "Parameters",
        details:
          "Main & secondary colors / wear intensity / variation",
        longText:
          "<strong>Exposed intuitive parameters:</strong> main color, secondary color, tile size, global wear and random variation. \n" +
          "Grouped sliders with <strong>clear names</strong> to provide meaningful <strong>control for users.</strong>",
        tag: ["Tech Art"],
        media: [
          Parameters1,
          Parameters2,
          Parameters3,
          Parameters4,
        ],
      },

      //Unreal Engine integration
      {
        anchor: "ue-integration",
        category: "Unreal Engine integration",
        details:
          "Substance plugin import / material instances / normal & deteriorated versions",
        longText:
          "<strong>Imported</strong> the Substance material <strong>into UE5</strong> via the plugin. Created two material instances: a normal clean mosaic and a deteriorated one. " +
          "Tested parameters in-engine to ensure <strong>real-time customization.</strong>",
        tag: ["Tech Art"],
        media: [
          {
            //Video demo
            type: "video",
            src: "https://youtu.be/JqVL09kwadI",
          },
        ],
      },
    ],
  },

  {
    id: "viral-nebula",
    title: "Viral Nebula",
    tags: ["Tech Design", "Programming"],
    points: ["Survival Game", "Solo", "C#"],
    engineIcon: unityLogo,
    toolIcon: null,
    summary: "Page under construction (content available here and on github, playable on itch.io, just missing medias!)",
    thumb: "",

    //Page
    repoUrl: "https://github.com/inesbouakkaoui/Viral-Nebula",
    duration: "School project - took 1 month",
    year: "2024",

    //Context
    contextText:
      "Viral Nebula is an individual school project for the Programming II course. The objective was to design and program a third-person survival " +
      "game in Unity from scratch. \n" +
      "The game takes place in a research spaceship contaminated by a spreading virus and haunted by a hostile biomechanical robot. " +
      "The player must explore the ship, collect access codes, survive infected areas, and repair the central computer to win. ",
    team: [
      {
        name: "Me",
        linkedin: "https://www.linkedin.com/in/ines-bouakkaoui/",
        roles: "Tech Design, Programmer",
      },
    ],
    tools: ["Unity", "C#", "Visual Studio",],

    //Needs
    needs: [
      {
        label: "Game design documentation",
        desc: "conception doc and player guide explaining world, goals, controls, enemies, items, and victory/defeat conditions.",
      },
      {
        label: "Playable 3D environment",
        desc: "spaceship with research rooms, control room, and safe decontamination zones.",
      },
      {
        label: "Main character system",
        desc: "third-person controller (CharacterController), animations (idle/run), footsteps sound, damage/death feedback.",
      },
      {
        label: "NPC and enemies",
        desc: "PNJ colleague with dialogue and scripted death by robot, biomechanical robots patrolling with NavMeshAgents, pursuing and attacking player.",
      },
      {
        label: "Obstacles and dangers",
        desc: "Contaminated rooms with countdown timer, locked control room door requiring 5 code fragments",
      },
      {
        label: "Inventory system",
        desc: "items to collect and use (mask recharge, health kits, codes).",
      },
      {
        label: "Menus and game flow",
        desc: "title screen, victory and defeat screens with sounds.",
      },
    ],

    // What I did
    whatIDidItems: [
      {
        anchor: "player-system",
        category: "Player system",
        details: "Character Controller / idle & run animations / footstep SFX / health & damage",
        longText:
          "• Implemented a third‑person <strong>Character Controller</strong> (movement, rotation, gravity). \n\n" +
          "• Integrated <strong>idle</strong> and <strong>run</strong> animations with synchronized footstep SFX. \n\n" +
          "• Built <strong>player health</strong> logic with damage feedback and death handling.",
        tag: ["Programming", "Tech Design"],
        media: [],
      },
      {
        anchor: "environment-hazards",
        category: "Environment & hazards",
        details: "Spaceship layout / safe zones & infected rooms / timed contamination",
        longText:
          "• Constructed a compact spaceship environment from asset store with <strong>safe decontamination zones</strong> and " +
          "<strong>infected rooms</strong> that apply damage on a <strong>countdown timer</strong>. \n\n" +
          "• Added doors and blockers to clearly limit the play space.",
        tag: ["Level Design", "Programming"],
        media: [],
      },
      {
        anchor: "npcs-enemies",
        category: "NPCs & enemies",
        details: "Friendly NPC interaction / NavMesh patrol & chase / attack behavior",
        longText:
          "• Scripted a <strong>friendly NPC</strong> (onboarding and narrative beat). \n\n" +
          "• Implemented <strong>biomechanical robots</strong> using <strong>NavMesh</strong> for patrols, " +
          "player detection, pursuit, and attack; tuned states to keep pressure while leaving escape windows.",
        tag: ["AI", "Programming"],
        media: [],
      },
      {
        anchor: "items-inventory",
        category: "Items & inventory",
        details: "Collectibles (codes, health, mask recharges) / inventory UI / gated door",
        longText:
          "• Developed <strong>collectible items</strong> with on-pickup/use SFX: health kits, mask recharges, and " +
          "<strong>five code digits</strong>. \n\n" +
          "• Built an <strong>inventory UI</strong> to track quantities and " +
          "gated the control room door to <strong>unlock after all five digits</strong> are collected.",
        tag: ["UI", "Programming"],
        media: [],
      },
      {
        anchor: "flow-menus",
        category: "Menus & game flow",
        details: "Title / victory / defeat screens with audio transitions",
        longText:
          "• Created a <strong>title screen</strong> with looping theme, and <strong>victory/defeat</strong> screens " +
          "that restart the game on input. \n\n" +
          "• Wired audio transitions for clear state changes.",
        tag: ["Programming"],
        media: [],
      },
    ],

  },

  /*{
    id: "hyperconnected",
    title: "Hyperconnected",
    tags: ["Tech Design", "Tech Art"],
    points: ["Experimental Game", "Team of 4", "Blueprint, Shaders"],
    engineIcon: unrealLogo,
    toolIcon: null,
    summary: "Small resume of what I did",
    thumb: "",
  },*/
  /*{
    id: "sand-rock",
    title: "Sand rock",
    tags: ["Tech Art"],
    points: ["Material", "Solo", "Substance Designer"],
    engineIcon: substanceLogo,
    toolIcon: "",
    summary: "Small resume of what I did",
    thumb: "",
  },*/
  /*{
    id: "renaissance",
    title: "Renaissance",
    tags: ["Tech Design"],
    points: ["Game Jam Valleyfield", "Team of 5", "Blueprint"],
    engineIcon: unrealLogo,
    toolIcon: null,
    summary: "Small resume of what I did",
    thumb: "",
  },*/
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
