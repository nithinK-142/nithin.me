import React from "react";
import { icons } from "@/app/data/icons";
import Socials from "@/app/components/Socials";
import Form from "@/app/components/Form";

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-8 px-10 md:px-0">
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl mb-4 font-bold">Just Say Hi!</h2>

        <h3 className="text-lg">
          I&apos;m always open to discuss your project or talk about new things.
          Let&apos;s work together and I&apos;ll provide my utmost assistance.
        </h3>

        <div className="mt-2 flex-align flex-wrap hover:opacity-80">
          <div className="h-5 w-auto">{icons.envelope}</div>
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
        <Socials />
      </div>

      <div className="w-full md:w-1/2 p-4">
        <Form />
      </div>
    </div>
  );
};

export default ContactPage;
