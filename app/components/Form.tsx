import React from "react";

type FormType = {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
};

const Form = () => {
  const InputField = ({
    label,
    id,
    placeholder,
    required = false,
  }: FormType) => (
    <>
      <label className="block mb-2 text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full px-2 py-1 mb-4 rounded-sm outline-none bg-neutral-700 "
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      />
    </>
  );

  return (
    <form
      action="https://formspree.io/f/xgejnrad"
      method="POST"
      className="max-w-full md:max-w-md"
    >
      <InputField
        label="Name"
        id="name"
        placeholder="Home Lander"
        required={true}
      />
      <InputField
        label="Email"
        id="email"
        placeholder="leaderof7@vought.corp"
        required={true}
      />
      <InputField
        label="Subject"
        id="subject"
        placeholder="This is the subject"
      />
      <label className="block mb-2 text-sm" htmlFor="message">
        Message
      </label>
      <textarea
        className="w-full min-h-full px-2 py-1 rounded-sm outline-none bg-neutral-700"
        rows={4}
        name="message"
        id="message"
        placeholder="I would like to ask you..."
        required
      ></textarea>
      <button
        type="submit"
        className="px-5 pt-3 pb-2 mt-4 bg-orange-400 rounded-md"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
