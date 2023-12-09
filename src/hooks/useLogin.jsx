import { useEffect, useState } from "react";
import { getToken } from "../services/login";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      const user = getToken(token);
      setUsername(user);
    } else {
      window.location.href = "/";
    }
  }, []);
  return username;
};
