import { useEffect, useRef } from "react";
import Button from "../Button";
import InputForm from "../Input";

const FormRegister = () => {
  const RegistHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("Username", e.target.username.value);
    window.location.href = "/";
  };
  const nameRef = useRef(null);
  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <>
      <form onSubmit={RegistHandler}>
        <InputForm
          For="username"
          label="Username"
          type="text"
          placeholder="Insert your username here...."
          name="username"
          ref={nameRef}
        />
        <InputForm
          For="email"
          label="Email"
          type="email"
          placeholder="email@example.com"
          name="email"
        />
        <InputForm
          For="password"
          label="Password"
          type="password"
          placeholder="*******"
          name="password"
        />
        <InputForm
          For="Confirm Password"
          label="Confirm Password"
          type="password"
          placeholder="*******"
          name="ConfirmPassword"
        />
        <Button classname="w-full bg-blue-600 rounded-md" type="submit">
          Register
        </Button>
      </form>
    </>
  );
};
export default FormRegister;
