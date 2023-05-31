import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { label, name, type, placeholder, id } = props;
  return (
    <div className="mb-3">
      <Label For={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        id={id}
        ref={ref}
      />
    </div>
  );
});

export default InputForm;
