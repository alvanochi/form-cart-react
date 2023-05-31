import { useEffect, useRef } from "react";
import Button from "../Button";
import InputForm from "../Input";

const FormLogin = () => {
  const LoginHandler = (e) => {
    localStorage.setItem("Email", e.target.email.value);
    localStorage.setItem("Password", e.target.password.value);
    e.preventDefault();
    window.location.href = "/products";
  };
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={LoginHandler}>
        <InputForm
          For="email"
          label="Email"
          type="email"
          placeholder="email@example.com"
          name="email"
          ref={emailRef}
        />
        <InputForm
          For="password"
          label="Password"
          type="password"
          placeholder="*******"
          name="password"
        />
        <Button
          classname="w-full bg-blue-600 rounded-md"
          type="submit"
          // onClick={LoginHandler}
        >
          Login
        </Button>
      </form>
    </>
  );
};
export default FormLogin;
