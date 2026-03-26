import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akshat Valani",
  initials: "AV",
  url: "https://dillion.io",
  location: "Gujarat, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Engineer With multiple hats. I love building things and helping people. Very active on Twitter.",
  summary:"Full-Stack Engineer with hands-on experience building production web applications and AI-powered features",

  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "GSAP",
    "three.js",
    "Node.js",
    "Redux",
    "Python",
    "Express.js",
    "Postgres",
    "Docker",
    "Kubernetes",
    "CI/CD",
    
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "akshat01tech@gmail.com",
    tel: "+919664881272",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/akshat1074",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/akshat-valani-551a572a6/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/scramber01",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@AkshatValani",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Ed3hub",
      href: "https://www.ed3hub.com/",
      badges: [],
      location: "Remote",
      title: "Founding Developer Intern",
      logoUrl: "/atomic.png",
      start: "June 2025",
      end: "Dec 2025",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    }
    
  ],
  education: [
    {
      school: "Gujarat Technological University",
      href: "https://buildspace.so",
      degree: "B.tech in Computer Science",
      logoUrl: "/buildspace.jpg",
      start: "2022",
      end: "2026",
    }
  
  ],
  projects: [
    {
      title: "Subconcious",
      href: "",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Developed an app that stores your Important Links,Tweets and Notes.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Nodejs",
        "Expressjs",
        "Prisma",
        "PostgreSQL"
        
      ],
      links: [
        {
          type: "Website",
          href: "https://subconcious-ktqzt181s-akshat1074s-projects.vercel.app/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/akshat1074/Subconcious",
          icon: <Icons.github className="size-3" />,
        },
        {
          type:"Demo",
          href:"https://youtu.be/dCCO9glWXNE",
          icon: <Icons.youtube className="size-3"/>
        }
      ],
      image: "/Subconcious3.png",
      video: "",
    },
    {
      title: "Signalist",
      href: "",
      dates: "Jan 2026 - Jan 2026",
      active: true,
      description:
        "Build and Deploy a Real-Time Stock Market App with Alerts, Charts & AI Insights.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Inngest",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://stock-market-delta-three.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/akshat1074/stock-market",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Signalist.png",
      video:
        "",
    },
    {
      title: "AI logo generator",
      href: "",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Gemini API",
        "Shadcn UI",
        
      ],
      links: [
      {
          type: "Source",
          href: "https://github.com/akshat1074/AI-logo-gen",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },

    {
      title: "Nimbus vapour75",
      href: "",
      dates: "Nov 2025 - Dec 2025",
      active: true,
      description:
        "Built an Ecommerce Keyboard Website with stunning animation and motions along with 3D objects.",
      technologies: [
        "Nextjs",
        "Typescript",
        "three.js",
        "GSAP",
        "Prismic"
      ],
      links: [
        {
          type: "Website",
          href: "https://nimbus-keyboards.vercel.app/.",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type:"Source",
          href:"https://github.com/akshat1074",
          icon:<Icons.github className="size-3"/>

      }
       
      ],
      image: "/nimbus.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "AI Agent",
      dates: "November 15rd - 25th, 2025",
      location: "Remote",
      description:
        "Developed a AI agent which automatically fills the empty data sets which improve data quality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hackovillage",
      dates: "January 15rd - 17th, 2025",
      location: "Ahmedabad,Gujarat",
      description:
        "Developed a personal finance app with budget tracking.",
      image:
        "/lime.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],
} as const;
