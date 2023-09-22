import React from 'react'
import { icons } from '@/app/data/icons';
import Socials from '@/app/components/Socials';

const ContactPage = () => {
  return (
    <div className="bg-pink-700 flex flex-col md:flex-row justify-between mt-8 px-10 md:px-0">
      <div className="w-full md:w-1/2 bg-orange-600 p-4">
        <h2 className="text-2xl mb-4 font-bold">Just Say Hi!</h2>

        <h3 className="text-lg">I&apos;m always open to discuss your project or talk about new things. Let's work together and I&apos;ll provide my utmost assistance.</h3>

        <p className="mt-8 mb-2 font-semibold">Hire Me on :</p>
        <a href="https://www.fiverr.com/nithin_webdev?up_rollout=true" target="_blank" rel="noreferrer">
            {icons.fiverr}
        </a>

        <p className="mt-8 mb-2 font-semibold">Ping Me on :</p>
        <Socials />
      </div>

      <div className="w-full md:w-1/2 bg-neutral-700 p-4">
        <form action="https://formspree.io/xyynwlly" method="POST" className="max-w-full md:max-w-md">
          <label className="block text-sm mb-2" htmlFor="name">
            Name
          </label>
          <input className="mb-4 py-1 px-2 rounded-sm w-full outline-none text-neutral-900" type="text" id="name" name="name" placeholder="Bruce Wayne" required />
          <label className="block text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input className="mb-4 py-1 px-2 rounded-sm w-full outline-none text-neutral-900" type="email" id="email" name="email" placeholder="bruce@waynecorp.com" required />
          <label className="block text-sm mb-2" htmlFor="subject">
            Subject
          </label>
          <input className="mb-4 py-1 px-2 rounded-sm w-full outline-none text-neutral-900" type="subject" id="subject" name="subject" placeholder="This is the subject" />
          <label className="block text-sm mb-2" htmlFor="message">
            Message
          </label>
          <textarea className="py-1 px-2 rounded-sm w-full outline-none text-neutral-900 min-h-full" rows={4} name="message" id="message" placeholder="I would like to ask you..." required></textarea>
          <button type="submit" className="bg-orange-400 text-neutral-900 rounded-md pt-3 pb-2 px-5 mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage