import { useEffect, useRef, useState } from "react";
import Button from "../Button";
import InputForm from "../Input";
import login from "../../../services/login";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const LoginHandler = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("Token", res.token);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });

    // window.location.href = "/products";
  };
  const userRef = useRef(null);
  useEffect(() => {
    userRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={LoginHandler}>
        <InputForm
          For="username"
          label="Username"
          type="text"
          placeholder="johnd"
          name="username"
          ref={userRef}
        />
        <InputForm
          For="password"
          label="Password"
          type="password"
          placeholder="m38rmF$"
          name="password"
        />
        <Button
          classname="w-full bg-blue-600 rounded-md"
          type="submit"
          // onClick={LoginHandler}
        >
          Login
        </Button>
        {loginFailed && (
          <p className="mb-2 text-center text-red-500">{loginFailed}</p>
        )}
      </form>
    </>
  );
};
export default FormLogin;
