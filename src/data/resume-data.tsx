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
  about: "Life-long creative, Brand new teacher.",
  quote: "Cody has demonstrated his dedication to the teaching profession on a weekly basis, and wants all ākonga to experience success in his lessons.", 
  summary:
    "As a Design Engineer, I prided myself on making fun and accessible products - now I get to share those skills with Aotearoa's next generation of makers and creators. I have over 5 years of experience as a Designer and 3 as a Developer.",
  avatarUrl:
    //"https://avatars.githubusercontent.com/u/123703655?s=400&u=d8d259c7b9ecb4a43bf669be24968e809e17351b&v=4"
    "https://avatars.githubusercontent.com/u/123703655?v=4",
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
        url: "https://www.linkedin.com/in/cody-derbyshire/",
        icon: LinkedInIcon,
      },
      /* {
        name: "X",
        url: "https://twitter.com/littleKodai",
        icon: XIcon,
      }, */
    ],
  },

  work: [
    {
      company: "Freelance Design",
      link: "https://www.codyderbyshire.com",
      badges: [],
      title: "Digital Designer",
      logo: "",
      start: "2018",
      end: "2025",
      description:
        "Creation of but not limited to websites, business cards, branding, posters, pamphelets, invitations, and user experiences. Technologies: Adobe Illustrator, Adobe Photoshop, Squarespace, Javascript, React, HTML, CSS",
      achievements:
        "Branding & Marketing for Toi Whakaari Manifest showcase, Website and UX for Toi Whakaari Festival of Work in Development 2020",
    },
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
    /*  {
      company: "NZ Games Festival",
      link: "https://nzgamesfest.com/",
      badges: [],
      title: " Website Manager",
      logo: "",
      start: "2025",
      end: "2025",
      description:
        "Updating and management of website including uploading and reorganising events and data",
      achievements: "",
    }, */
  ],
  education: [
    {
      school: "Victoria University",
      degree: "Graduate Diploma of Teaching (Secondary)",
      placement: "Rāroa Intermediate",
      start: "2025",
      end: "current",
      type: "Diploma",
    },
    {
      school: "Whitecliffe College",
      degree: "Diploma in Web Development and Design",
      placement: "",
      start: "2023",
      end: "2023",
      type: "Diploma",
    },
    {
      school: "Yoobee College",
      degree: "NZ Certificate in Information Technology (Level 5)",
      placement: "",
      start: "2022",
      end: "2022",
      type: "Certificate",
    },
    {
      school: "Toi Whakaari",
      degree: "Bachelor of Design",
      placement: "",
      start: "2018",
      end: "2020",
      type: "Degree",
    },
    {
      school: "Melbourne Polytechnic",
      degree: "Diploma of Costume Design + Construction",
      placement: "",
      start: "2017",
      end: "2017",
      type: "Diploma",
    },
  ],
  skills: [
    "Graphic Design",
    "Web Development",
    "Architecture",
    "Industrial Design",
    "Costume + Fashion Design",
    "Prop Design",
    "Sculpture",
    "Animation",
    "Hard Materials",
    "Soft Materials",
    "Printmaking",
    "Woodworking",
    "Metalworking",
    "Electronics",
    "Moldmaking",
    "Technical Drawing", 
  
  ],
  /*   projects: [
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
  ], */
} as const;
