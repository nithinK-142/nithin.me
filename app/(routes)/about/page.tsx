import { achivements } from "../../data/achievement";
import { icons } from "../../data/icons";
import { happyPills } from "../../data/happy-pills";

const AboutPage = () => {
  return (
    <section className="md:mb-6">
      <div className="space-y-4 font-sand">
        <div className="leading-relaxed">
          <p>
            I&apos;m <span className="font-medium">Nithin,</span> a 23 years old
            self-taught <span className="font-medium">Web Developer</span> / a{" "}
            <span className="font-medium">Tech Nerd</span> living in{" "}
            <a
              href="https://en.wikipedia.org/wiki/Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Bangalore, India
            </a>
            {". "}
            I&apos;ve recently completed my
            <span className="font-medium">
              {" "}
              Master&apos;s in Compter Applications at{" "}
              <a
                href="https://www.cambridge.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Cambridge Institute of Technology
              </a>{" "}
              - Bangalore, India
              {". "}
            </span>
            I have extensive knowledge of HTML, CSS & JavaScript and I&apos;m
            passionate about building blazing fast, user-friendly, responsive
            and visually stunning web applications with cutting-edge
            technologies like{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              NextJs
            </a>{" "}
            ,{" "}
            <a
              href="https://svelte.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              SvelteKit
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4"
            >
              TailwindCSS
            </a>
            .
          </p>
          <p className="hidden pt-2 lg:block">
            I spend hours experimenting with HTML, CSS, and JavaScript or
            dabbling with new technologies. I&apos;m curious and enjoy work that
            challenges me to learn something new and stretch in a different
            direction. Outside of coding, I enjoy spending time reading novels,
            listening to music and podcasts, gaming or binge-watching.
          </p>
          <p>
            I&apos;m currently available for a new freelance job.{" "}
            <a
              href="https://www.fiverr.com/nithin_webdev?up_rollout=true"
              className="font-medium underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              Hire me!
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-0">
          <div className="w-full sm:w-1/2">
            <p className="my-4 text-xl font-semibold uppercase">Achievements</p>
            <ul className="space-y-1">
              {achivements.map(({ title, link }, index) => (
                <li className="flex items-center gap-2" key={index}>
                  <span className="h-4 fill-green-500">{icons.tick}</span>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-90 hover:opacity-100"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pb-4">
            <p className="my-4 text-xl font-semibold uppercase">
              My happy pills
            </p>
            <div className="flex gap-3">
              {happyPills.map(({ platform, icon }) => (
                <span title={platform} key={platform}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
