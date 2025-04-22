import "./FormField.css";

const FormField = ({
  element = "input",
  type = "text",
  placeholder,
  options = [],
  className = "",
  ...rest
}) => {
  const baseClasses =
    "w-full p-2 pe-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600 text-sm";

  return (
    <>
      {element === "input" && (
        <input
          type={type}
          placeholder={placeholder}
          className={`${baseClasses} ${className}`}
          {...rest}
        />
      )}
      {element === "textarea" && (
        <textarea
          placeholder={placeholder}
          className={`${baseClasses} ${className}`}
          {...rest}
        />
      )}
      {element === "select" && (
        <select className={`${baseClasses} ${className}`} {...rest}>
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default FormField;
