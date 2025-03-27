import { Icons } from "@/components/Icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Brightly Dunsford",
  initials: "BD",
  url: "https://brightly.io",
  location: "Negombo, SL",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Computer Science Undergraduate | Entrepreneur | Web Developer | passionate about building innovative solutions and empowering others. Actively sharing insights on LinkedIn.",
  summary1:
    "I’m a **self-driven developer and entrepreneur with a strong passion for building digital solutions**. My journey started in a non-IT sector, where I discovered a love for web development and began creating websites as a hobby. I left my job when my higher studies in **Computer Science at the University of Ruhuna began,** where I honed my technical skills and deepened my understanding of software development.",
  summary2:
    "Now, I’m focused on turning my passion into a **business, working as a solopreneur to build and scale innovative web solutions.** I specialize in crafting high-quality, functional, and user-friendly applications that help businesses grow. Constantly learning and evolving, I thrive on solving real-world problems through technology and sharing insights with the community.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "C",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hello@brightly.io",
    tel: "+94762722894",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/techocea",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brightly-dunsford",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/bri.xht.ly.____",
        icon: Icons.instagram,

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

  education: [
    {
      school: "University of Ruhuna",
      href: "https://ruh.ac.lk/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/logoUni.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "Loyola College, Negombo",
      href: "https://loyolacollege.lk/",
      degree: "Advanced Level",
      logoUrl: "/logoScl.png",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Holiday Hook",
      href: "https://holiday-hook.vercel.app",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "A platform that helps travelers find unique holiday experiences, focusing on personalized itineraries, travel guides, and booking services.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Drizzle",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://holiday-hook.vercel.app",
          //   icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proj1.png",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Maryland Consultancy",
      href: "https://maryland-ecru.vercel.app",
      dates: "June 2023 - Present",
      active: true,
      description:
        "A web-based solution aimed at helping businesses streamline their operations, offering consulting services and management tools to ensure growth and sustainability.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Uploadthing",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://maryland-ecru.vercel.app",
          //   icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          //   icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj2.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Brescia Grameen",
      href: "https://bresciagrameen.lk",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "A financial platform designed to empower individuals by providing access to micro-loans for entrepreneurial ventures, contributing to the development of underserved communities",
      technologies: [
        "React",
        "NodeJS",
        "MongoDB",
        "AWS",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://bresciagrameen.lk",
          //   icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          //   icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/proj3.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Write AI",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "An innovative AI-powered tool that serves as a grammar checker, summarizer, humanizer, and tone converter. Write AI simplifies content creation by enhancing readability, engagement, and precision.",
      technologies: [
        "React",
        "Typescript",
        "Material UI",
        "Payhere",
        "Gemini AI",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          //   icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/proj4.jpeg",
      // video:
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
};
