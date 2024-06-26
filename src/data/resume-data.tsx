import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Cody Derbyshire",
  initials: "CD",
  location: "Wellington, New Zealand",
  locationLink: "https://www.google.com/maps/place/Wellington",
  about:
    "Design Engineer focused on graphic design and front-end web development.",
  summary:
    "As a Front-End Developer + Digital Designer, I pride myself on making fun and accessible products. I'm always eager to learn and love feedback. Currently, I work mostly with React, Framer Motion and the Adobe Suite. I have over 5 years of experience as a Designer and a 2 years as a Developer.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/123703655?s=400&u=d8d259c7b9ecb4a43bf669be24968e809e17351b&v=4",
  personalWebsiteUrl: "https://codyderbyshire.com",
  contact: {
    email: "derbyshire@outlook.co.nz",
    tel: "+64220725530",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Cody-Derbyshire",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "www.linkedin.com/in/cody-derbyshire-7388a423b",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/littleKodai",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Whitecliffe College",
      degree: "Diploma in Web Development and Design",
      start: "2023",
      end: "2023",
    },
    {
      school: "Yoobee College",
      degree: "NZ Certificate in Information Technology (Level 5)",
      start: "2022",
      end: "2022",
    },
    {
      school: "Toi Whakaari",
      degree: "Bachelor of Design",
      start: "2018",
      end: "2020",
    },
    {
      school: "Melbourne Polytechnic",
      degree: "Diploma of Costume Design + Construction",
      start: "2017",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Scale Studios",
      link: "https://www.scalestudios.co.nz/",
      badges: [],
      title: "In-house Designer + Manufacturer",
      logo: "",
      start: "2020",
      end: "2022",
      description:
        "Designed + manufactured props and set-dressing elements for film and television. Technologies: 3D printing, Fusion 360, Adobe Illustrator, Adobe Photoshop, Blender, Rhino, Lasercutting, CNC Machining",
      achievements:
        "Work featured in Avatar 2, Rings of Power, X, Pearl, and Evil Dead Rise",
    },
    {
      company: "Freelance Design",
      link: "https://www.codyderbyshire.com",
      badges: [],
      title: "Digital Designer",
      logo: "",
      start: "2018",
      end: "Current",
      description:
        "Creation of but not limited to websites, business cards, branding, posters, pamphelets, invitations, and user experiences. Technologies: Adobe Illustrator, Adobe Photoshop, Squarespace, Javascript, React, HTML, CSS",
      achievements:
        "Branding & Marketing for Toi Whakaari Manifest showcase, Website and UX for Toi Whakaari Festival of Work in Development 2020",
    },
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Framer-motion",
    "Illustrator",
    "Photoshop",
    "Fusion 360",
  ],
  projects: [
    {
      title: "Black Garlic Furniture",
      techStack: [
        
        "React",
        "Vite",
        "Framer Motion",
        "Spline",
      ],
      description:
        "Webstore",
      logo: "",
      link: {
        label: "",
        href: "https://black-garlic-furniture.onrender.com/",
      },
    },
    {
      title: "codyderbyshire.com",
      techStack: [ "Vite", "React", "Framer Motion"],
      description:
        "Personal Website",
      logo: "",
      link: {
        label: "",
        href: "https://www.codyderbyshire.com",
      },
    },
    {
      title: "Poke-API",
      techStack: [ "Vite", "React", "PokeAPI"],
      description: "API",
      logo: "",
      link: {
        label: "",
        href: "https://poke-gen.onrender.com/",
      },
    },
    {
      title: "Inky",
      techStack: ["Side Project", "Javascript"],
      description: "Chatbot",
      logo: "",
      link: {
        label: "",
        href: "https://build-a-chatbot-wwl8.onrender.com/",
      },
    },
    {
      title: "@FONT-FACE",
      techStack: ["Side Project", "React", "Stripe"],
      description: "Webstore",
      logo: "",
      link: {
        label: "",
        href: "https://react-online-shop.onrender.com/",
      },
    },
     {
      title: "font-select",
      techStack: [ "React"],
      description: "Type Foundry",
      logo: "",
      link: {
        label: "",
        href: "https://font-select.onrender.com",
      },
    },
  ],
} as const;
