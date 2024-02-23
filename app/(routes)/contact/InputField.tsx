type FormType = {
  label: string;
  id: string;
  placeholder: string;
  required?: boolean;
};

const InputField: React.FC<FormType> = ({
  label,
  id,
  placeholder,
  required = false,
}) => {
  return (
    <>
      <label className="block mb-2 text-sm" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full px-2 py-1 mb-4 rounded-sm outline-none bg-white/70 dark:bg-neutral-700"
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
};

export default InputField;
