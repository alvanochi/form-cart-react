import axios from "axios";
import jwtDecode from "jwt-decode";

const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data);
    })
    .catch((err) => {
      callback(false, err);
    });
};

export const getToken = (token) => {
  const decode = jwtDecode(token);
  return decode.user;
};

export default login;
