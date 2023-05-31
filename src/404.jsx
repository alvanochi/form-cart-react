import { Link, useRouteError } from "react-router-dom";
import Button from "./components/Elements/Button";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="font-bold text-3xl">Oops!</h1>
      <p className="my-3 font-medium text-xl">
        The page you are looking for might is temporarily unavailable
      </p>
      <p>{error.message}</p>
      <Link to="/">
        <Button classname="bg-blue-500 rounded-full">GO TO HOMEPAGE</Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
