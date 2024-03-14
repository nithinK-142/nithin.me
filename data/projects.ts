import p1 from "@/app/(routes)/test/assets/p1.jpg";
import p2 from "@/app/(routes)/test/assets/p2.jpg";
import p3 from "@/app/(routes)/test/assets/p3.jpg";
import { StaticImageData } from "next/image";

export type MainProjectsType = {
  href: string;
  gitLink: string;
  title: string;
  description: string;
  technologies: string[];
};

export const mainProjects: MainProjectsType[] = [
  {
    href: "https://nithin-me.vercel.app/",
    gitLink: "https://github.com/nithinK-142/nithin.me",
    title: "Portfolio V3",
    description: "Single page app with clean and simple layout.",
    technologies: ["NextJs", "Tailwind", "Typescript"],
  },
  {
    href: "https://next-aesop-clone.vercel.app/",
    gitLink: "https://github.com/nithinK-142/next-aesop-clone",
    title: "Aesop Clone",
    description: "Clone of aesop made using nextjs13.",
    technologies: ["NextJs", "Tailwind", "Typescript"],
  },
  {
    href: "https://mern-cart.vercel.app/",
    gitLink: "https://github.com/nithinK-142/mern-cart",
    title: "MERN Cart",
    description: "A simple ECommerce app using MERN Stack.",
    technologies: ["ReactJs", "TypeScript", "NodeJs", "ExpressJS", "Mongodb"],
  },
  {
    href: "https://unsplash-gallery-app.vercel.app/",
    gitLink: "https://github.com/nithinK-142/unsplash-gallery",
    title: "Unsplash Gallery",
    description: "Gallery app with Carousal and Modal.",
    technologies: ["ReactJs", "React-Hooks", "Tailwind", "Unsplash API"],
  },
  {
    href: "https://sveltekittodo.netlify.app/",
    gitLink: "https://github.com/nithinK-142/todo-sveltekit-fire",
    title: "SvelteKit Todo",
    description: "Authenticate. Add, Complete , Delete and Repeat.",
    technologies: ["SvelteKit", "Firebase", "Firebase-Auth", "Tailwind"],
  },
  {
    href: "https://nithink-142.github.io/",
    gitLink: "https://github.com/nithinK-142/nithink-142.github.io",
    title: "Portfolio V2",
    description: "Crafted using React with a clean and elegant design..",
    technologies: ["ReactJs", "Bootstrap"],
  },
  {
    href: "https://ytvideostats.netlify.app/",
    gitLink: "https://github.com/nithinK-142/yt-video-stats-with-dislikes",
    title: "YT Stats",
    description: "Youtube video with all details and also dislikes.",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    href: "https://nasaapiusage.netlify.app/",
    gitLink: "https://github.com/nithinK-142/NASA-API-usage",
    title: "Space Explorer",
    description: "Space exploring with nasa. Images of outer space.",
    technologies: ["HTML", "CSS", "JS"],
  },
];

export type MainProjectsSubType = {
  href: string;
  gitLink: string;
  title: string;
  description: string;
  technologies: string[];
  path: StaticImageData;
};

export const mainProjectsSub = [
  {
    href: "https://nithin-me.vercel.app/",
    gitLink: "https://github.com/nithinK-142/nithin.me",
    title: "Portfolio V3",
    description: "Single page app with clean and simple layout.",
    technologies: ["NextJs", "Tailwind", "Typescript"],
    path: p1,
  },
  {
    href: "https://next-aesop-clone.vercel.app/",
    gitLink: "https://github.com/nithinK-142/next-aesop-clone",
    title: "Aesop Clone",
    description: "Clone of aesop made using nextjs13.",
    technologies: ["NextJs", "Tailwind", "Typescript"],
    path: p1,
  },
  {
    href: "https://mern-cart.vercel.app/",
    gitLink: "https://github.com/nithinK-142/mern-cart",
    title: "MERN Cart",
    description: "A simple ECommerce app using MERN Stack.",
    technologies: ["ReactJs", "TypeScript", "NodeJs", "ExpressJS", "Mongodb"],
    path: p2,
  },
  {
    href: "https://unsplash-gallery-app.vercel.app/",
    gitLink: "https://github.com/nithinK-142/unsplash-gallery",
    title: "Unsplash Gallery",
    description: "Gallery app with Carousal and Modal.",
    technologies: ["ReactJs", "React-Hooks", "Tailwind", "Unsplash API"],
    path: p1,
  },
  {
    href: "https://sveltekittodo.netlify.app/",
    gitLink: "https://github.com/nithinK-142/todo-sveltekit-fire",
    title: "SvelteKit Todo",
    description: "Authenticate. Add, Complete , Delete and Repeat.",
    technologies: ["SvelteKit", "Firebase", "Firebase-Auth", "Tailwind"],
    path: p1,
  },
  {
    href: "https://nithink-142.github.io/",
    gitLink: "https://github.com/nithinK-142/nithink-142.github.io",
    title: "Portfolio V2",
    description: "Crafted using React with a clean and elegant design..",
    technologies: ["ReactJs", "Bootstrap"],
    path: p1,
  },
  {
    href: "https://ytvideostats.netlify.app/",
    gitLink: "https://github.com/nithinK-142/yt-video-stats-with-dislikes",
    title: "YT Stats",
    description: "Youtube video with all details and also dislikes.",
    technologies: ["HTML", "CSS", "JS"],
    path: p1,
  },
  {
    href: "https://nasaapiusage.netlify.app/",
    gitLink: "https://github.com/nithinK-142/NASA-API-usage",
    title: "Space Explorer",
    description: "Space exploring with nasa. Images of outer space.",
    technologies: ["HTML", "CSS", "JS"],
    path: p1,
  },
];

type OtherType = {
  href: string;
  title: string;
};

export const otherProjects: OtherType[] = [
  {
    title: "nithinK-142/vue-expense-tracker",
    href: "https://github.com/nithinK-142/vue-expense-tracker",
  },
  {
    title: "nithinK-142/spaceportfolio",
    href: "https://github.com/nithinK-142/spaceportfolio",
  },
  {
    title: "nithinK-142/svelte-todo",
    href: "https://github.com/nithinK-142/todo-svelte-fire",
  },
];

export const frameworkGuides = [
  {
    framework: "React",
    title: "nithinK-142/react-guide",
    href: "https://react-guide.vercel.app/",
  },
  {
    framework: "Next.js",
    title: "nithinK-142/nextjs-guide",
    href: "https://next-guide-main.vercel.app/",
  },
  {
    framework: "Vue",
    title: "nithinK-142/vue-guide",
    href: "https://vue-guide.vercel.app/",
  },
  {
    framework: "SvelteKit",
    title: "nithinK-142/svelte-guide",
    href: "https://svelte-guide.vercel.app/",
  },
  {
    framework: "Node.js",
    title: "nithinK-142/node-guide",
    href: "https://node-guide.vercel.app/",
  },
];
