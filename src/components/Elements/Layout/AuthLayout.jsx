import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <div className="text-blue-600 font-bold mb-2 text-3xl">{title}</div>
        <p className="font-medium text-slate-500 mb-5">
          Welcome back, Please enter your details!
        </p>
        {children}
        <p className="text-sm text-center">
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
