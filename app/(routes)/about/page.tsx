// import React from "react";
import HappyPill from "../../components/HappyPill"
import Achievements from "../../components/Achievements"

const AboutPage = () => {
  return (
    <section className="md:mb-6">
      <div className="space-y-4">
        <div className="leading-relaxed">
          <p className="block pt-4 lg:hidden">
            Proficient in HTML, CSS & JavaScript and passionate about building
            blazing fast, user-friendly, responsive and visually stunning web
            applications with cutting-edge technologies like NextJs , SvelteKit
            and TailwindCSS. Focused on continuous learning to stay ahead in the
            ever-evolving realm of web. Collaborative team player & dedicated to
            staying updated on the latest trends.
          </p>
          <p className="about-para">
            I&apos;m <span>Nithin,</span> a self-taught{" "}
            <span>Web Developer</span> / <span>Tech Nerd</span> from{" "}
            <a
              href="https://en.wikipedia.org/wiki/Shimoga"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Shimoga, India
            </a>{" "}
            with a
            <span>
              {" "}
              Master&apos;s Degree{" "}
              <abbr
                className="about-abbr"
                title="Master of Computer Applications"
              >
                &#40;MCA&#41;
              </abbr>{" "}
              from{" "}
              <a
                href="https://www.cambridge.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
              >
                Cambridge Institute of Technology
              </a>{" "}
              - Bangalore, India
              {". "}
            </span>
            I&apos;m Proficient in HTML, CSS & JavaScript and passionate about
            building blazing fast, user-friendly, responsive and visually
            stunning web applications with cutting-edge technologies like{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              NextJs
            </a>{" "}
            ,{" "}
            <a
              href="https://svelte.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              SvelteKit
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              TailwindCSS
            </a>
            .
          </p>
          <p className="about-para">
            I spend a lot of time messing around with{" "}
            <abbr className="about-abbr" title="HTML, CSS & JavaScript">
              web
            </abbr>{" "}
            and checking out latest tech trends. I&apos;m super curious and love
            tackling projects that make me learn something new and take me in
            new directions. When I&apos;m not coding, I enjoy spending time
            jamming to music and podcasts, gaming, or just binge-watching stuff.
          </p>
          <p>
            I&apos;m currently available for a new freelance job.{" "}
            <a
              href="https://www.fiverr.com/nithin_webdev?up_rollout=true"
              className="about-link"
              target="_blank"
              rel="noreferrer"
            >
              Hire me!
            </a>
          </p>
        </div>
        <div className="gap-8 flex-colm sm:flex-row sm:gap-0">
          <div className="w-full sm:w-1/2">
            <Achievements />
          </div>

          <div className="hidden pb-4 md:block">
            <HappyPill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
