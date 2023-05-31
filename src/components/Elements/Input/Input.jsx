import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name, id } = props;
  return (
    <input
      type={type}
      className="w-full px-3 py-2 my-2 text-xs border-2 rounded opacity-50 placeholder: focus:outline-blue-500"
      placeholder={placeholder}
      name={name}
      id={id}
      ref={ref}
      required
    />
  );
});
export default Input;
