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
      <label className="block text-sm mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="mb-4 py-1 px-2 rounded-sm w-full outline-none bg-neutral-700 "
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
      <label className="block text-sm mb-2" htmlFor="message">
        Message
      </label>
      <textarea
        className="py-1 px-2 rounded-sm w-full outline-none bg-neutral-700 min-h-full"
        rows={4}
        name="message"
        id="message"
        placeholder="I would like to ask you..."
        required
      ></textarea>
      <button
        type="submit"
        className="bg-orange-400 rounded-md pt-3 pb-2 px-5 mt-4"
      >
        Send Message
      </button>
    </form>
  );
};

export default Form;
