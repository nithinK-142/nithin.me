import InputField from "./InputField";
import Button from "./Button";

const Form = () => {
  const inputFields = [
    { label: "Name", id: "name", placeholder: "Homelander", required: true },
    {
      label: "Email",
      id: "email",
      placeholder: "leaderof7@vought.corp",
      required: true,
    },
    { label: "Subject", id: "subject", placeholder: "To conquer earth!" },
  ];

  return (
    <form
      action="https://formspree.io/f/xgejnrad"
      method="POST"
      className="max-w-full md:max-w-md"
    >
      {inputFields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          id={field.id}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
      <label className="block mb-2 text-sm" htmlFor="message">
        Message
      </label>
      <textarea
        className="w-full min-h-full px-2 py-1 rounded-sm outline-none bg-white/70 dark:bg-neutral-700"
        rows={4}
        name="message"
        id="message"
        placeholder="I would like to ask you..."
        required
      ></textarea>
      <Button buttonText="Send Message" fontWeight="medium" />
    </form>
  );
};

export default Form;
