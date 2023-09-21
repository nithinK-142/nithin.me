export type main = {
  href: string;
  title: string;
  description: string;
  technologies: string[];
};

export const mainProjects: main[] = [
  {
    href: "https://sveltekittodo.netlify.app/",
    title: "SvelteKit Todo",
    description: "Authenticate. Add, Complete , Delete and Repeat.",
    technologies: ["SvelteKit", "Firebase", "Firebase-Auth", "Tailwind"],
  },
  {
    href: "https://unsplashgalleryapp.netlify.app/",
    title: "Unsplash Gallery",
    description: "Gallery app with Carousal and Modal.",
    technologies: ["ReactJs", "React-Hooks", "Tailwind", "Unsplash API"],
  },
  {
    href: "https://ytvideostats.netlify.app/",
    title: "YT Stats",
    description: "Youtube video with all details and also dislikes.",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    href: "https://nasaapiusage.netlify.app/",
    title: "Space Explorer",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    href: "https://tmdbflicks.netlify.app/",
    title: "TMDB Flicks",
    description: "Learn about Next.js in an interactive course with quizzes!",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    href: "https://sveltetodos.netlify.app/",
    title: "Svelte Todo",
    description: "Add, Complete , Delete and Repeat..",
    technologies: ["Svelte", "Firebase", "Tailwind"],
  },
  {
    href: "https://openweatherapp0.netlify.app/",
    title: "Weather App",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    technologies: ["HTML", "CSS", "JS"],
  },
];

export type other = {
  href: string;
  title: string;
};

export const otherProjects: other[] = [
  {
    title: "nithinK-142/react-auth",
    href: "https://github.com/nithinK-142/react-auth",
  },
  {
    title: "nithinK-142/electron-currency-converter",
    href: "https://github.com/nithinK-142/electron-currency-converter",
  },
];
