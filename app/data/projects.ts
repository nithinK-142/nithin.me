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
    description:
      "Single page app with clean and simple layout.",
    technologies: ["NextJs", "Tailwind","Typescript"],
  },
  {
    href: "https://sveltekittodo.netlify.app/",
    gitLink: "https://github.com/nithinK-142/todo-sveltekit-fire",
    title: "SvelteKit Todo",
    description: "Authenticate. Add, Complete , Delete and Repeat.",
    technologies: ["SvelteKit", "Firebase", "Firebase-Auth", "Tailwind"],
  },
  {
    href: "https://unsplashgalleryapp.netlify.app/",
    gitLink: "https://github.com/nithinK-142/unsplash-gallery",
    title: "Unsplash Gallery",
    description: "Gallery app with Carousal and Modal.",
    technologies: ["ReactJs", "React-Hooks", "Tailwind", "Unsplash API"],
  },
  {
    href: "https://sveltetodos.netlify.app/",
    gitLink: "https://github.com/nithinK-142/todo-svelte-fire",
    title: "Svelte Todo",
    description: "Add, Complete , Delete and Repeat..",
    technologies: ["Svelte", "Firebase", "Tailwind"],
  },
  {
    href: "https://nithin-dev.netlify.app/",
    gitLink: "https://github.com/nithinK-142/nithink-142.github.io",
    title: "Portfolio V2",
    description:
      "Crafted using React with a clean and elegant design..",
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
    description:
      "Space exploring with nasa. Images of outer space.",
    technologies: ["HTML", "CSS", "JS"],
  },
];

type OtherType = {
  href: string;
  title: string;
};

export const otherProjects: OtherType[] = [
  {
    title: "nithinK-142/react-auth",
    href: "https://github.com/nithinK-142/react-auth"
  },
  {
    title: "nithinK-142/tmdb-movies",
    href: "https://github.com/nithinK-142/tmdb-movies"
  },
  {
    title: "nithinK-142/weather-app",
    href: "https://github.com/nithinK-142/weather-app"
  },
];
