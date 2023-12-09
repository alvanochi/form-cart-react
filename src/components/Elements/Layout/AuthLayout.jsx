import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../../context/DarkMode";

const AuthLayout = ({ children, title, type }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute p-2 font-semibold text-white bg-blue-600 rounded-md top-2 right-2"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <div className="mb-2 text-3xl font-bold text-blue-600">{title}</div>
        <p className="mb-5 font-medium text-slate-500">
          Welcome back, Please enter your details!
        </p>
        {children}
        <p className={`text-sm text-center ${isDarkMode && "text-white"} `}>
          {type === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <Link
            to={type === "login" ? "/register" : "/"}
            className="font-bold text-blue-500"
          >
            {type === "login" ? "Register" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AuthLayout;
