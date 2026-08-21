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
    "LLM",
    "Fine tuning"
    
    
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
      company: "Cognitoxlabs",
      href: "",
      badges: [],
      location: "Remote",
      title: "AI Engineer Intern",
      logoUrl: "/CxL.png",
      start: "Jan 2026",
      end: "Apr 2026",
      description:
        "Built and shipped LLM-powered applications end-to-end,Designed and implemented RAG pipelines.",
    },
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
        "Shipped 20+ production features across dashboards, auth flows, and analytics systems used by early customers and internal teams",
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
      title: "CNN Audio Classifier",
      href: "",
      dates: "Jun 2026- Jul 2026",
      active: true,
      description:
        "Designed and trained a convolutional neural network in PyTorch for multi-class environmental sound classification, using mel-spectrogram feature extraction as model input ",
      technologies: [
        "Python",
        "Pytorch",
        "CNN",
        "Mel-Spectrogram",
        "Tensorboard",
        "Nextjs/Typescript",
        
        
      ],
      links: [
        
        {
          type: "Source",
          href: "https://github.com/akshat1074/cnn-audio-classifier",
          icon: <Icons.github className="size-3" />,
        },
       
      ],
      image: "/cnn.png",
      video: "",
    },
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
      title: "Recurrly",
      href: "",
      dates: "June 2026 - July 2026",
      active: true,
      description:
        "Recurrly is a production-ready mobile app for managing subscriptions, featuring automated billing reminders and full monetization. Built with React Native, Expo, Nativewind, and Clerk.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Clerk",
        "PostHog",
       
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/akshat1074/Native",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/native.png",
      video:
        "",
    },
    {
      title: "AI Radiologist",
      href: "",
      dates: "Dec 2025 - Jan 2026",
      active: true,
      description:
        "Developed an AI Radiologist that give detail report on X-rays.",
      technologies: [
        "Next.js",
        "Python",
        "TailwindCSS",
        "Hugging Face",
        
        
      ],
      links: [
      {
          type: "Source",
          href: "https://github.com/akshat1074/medsee",
          icon: <Icons.github className="size-3" />,
        },
        {
          type:"Demo",
          href:"https://x.com/scramber01/status/2049887219071279239",
          icon: <Icons.youtube className="size-3"/>
        }
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
      title: "Coral ",
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
      location: "Gujarat,India",
      description:
        "Developed a personal finance app with budget tracking.",
      image:
        "/lime.svg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    }
  ],
} as const;
