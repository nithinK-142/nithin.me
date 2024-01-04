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
