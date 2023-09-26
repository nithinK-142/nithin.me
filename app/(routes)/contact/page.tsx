// import React from "react";
import { icons } from "../../data/icons";
import Socials from "../../components/Socials";
import Form from "../../components/Form";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-between px-3 mt-8 md:flex-row md:px-0">
      <div className="w-full p-4 md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold opacity-90">Just Say Hi!</h2>

        <h3 className="text-lg">
          I&apos;m always open to discuss your project or talk about new things.
          Let&apos;s work together and I&apos;ll provide my utmost assistance.
        </h3>

        <div className="flex-wrap mt-2 flex-align hover:opacity-80">
          <div className="w-auto h-5">{icons.envelope}</div>
          <p className="pl-1 hover:underline underline-offset-2">
            <a href="mailto:nithin.sagar.359@gmail.com">
              nithin.sagar.359@gmail.com
            </a>
          </p>
        </div>
        <p className="mt-8 mb-2 font-semibold">Hire Me on :</p>
        <a
          href="https://www.fiverr.com/nithin_webdev?up_rollout=true"
          target="_blank"
          rel="noreferrer"
        >
          {icons.fiverr}
        </a>

        <p className="mt-8 mb-2 font-semibold">Ping Me on :</p>
        <Socials height={"h-6"} />
      </div>

      <div className="w-full p-4 md:w-1/2">
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
