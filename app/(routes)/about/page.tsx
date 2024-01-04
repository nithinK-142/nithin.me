import Extra from "@/components/sub/Extra"
import Tooltip from "@/components/sub/Tooltip"

const AboutPage = () => {
  return (
    <section className="md:mb-6">
    <div className="space-y-4">
        <div className="text-lg font-normal leading-relaxed transition-slow">
          <p className="block mt-4 lg:hidden">
            Proficient in HTML, CSS & JavaScript and passionate about building
            blazing fast, user-friendly, responsive and visually stunning web
            applications with cutting-edge technologies like NextJs , SvelteKit
            and TailwindCSS. Focused on continuous learning to stay ahead in the
            ever-evolving realm of web. Collaborative team player & dedicated to
            staying updated on the latest trends.
          </p>
            <p className="about-para">
                I&apos;m <span>Nithin,</span> a self-taught{" "} <span>Web Developer</span> based in{" "} Shimoga, India{". "} I completed my Master&apos;s{" "}
                <Tooltip text={"(MCA)"} content={"Master of Computer Applications"} tooltip="reverse" />
                {" "} at {" "}
                <a href="https://www.cambridge.edu.in/" target="_blank" rel="noopener noreferrer" className="about-link">
                    Cambridge Institute of Technology
                </a>
                {" "} - Bangalore, India{". "} I have extensive knowledge of HTML, CSS & JavaScript and experience in building blazing fast, user-friendly and responsive web apps with technologies like{" "}
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="about-link">
                    NextJs
                </a>
                {" "} ,{" "}
                <a href="https://svelte.dev" target="_blank" rel="noopener noreferrer" className="about-link">
                    Svelte
                </a>
                {" "} and{" "}
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="about-link">
                    Tailwind
                </a>
                .
            </p>
            <p className="about-para">
                I spend a lot of time working with{" "}
                <Tooltip text={"web"} content={"HTML, CSS & JavaScript"} />
                {" "}and keeping up with the latest tech trends. When I&apos;m not coding, I enjoy spending time listening to music and podcasts, gaming, or just binge-watching stuff.
            </p>
            <p className="pt-1 font-medium dark:font-normal">
                I&apos;m currently available for a new freelance job.{" "}
                <a href="https://www.fiverr.com/nithin_webdev?up_rollout=true" className="about-link" target="_blank" rel="noreferrer">
                    Hire me!
                </a>
            </p>
        </div>

        <Extra />
    </div>
</section>

  );
};

export default AboutPage;
