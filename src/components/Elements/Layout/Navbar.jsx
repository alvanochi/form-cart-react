import { useSelector } from "react-redux";
import { useLogin } from "../../../hooks/useLogin";
import Button from "../Button";
import { useContext, useEffect, useState } from "react";
import { DarkMode } from "../../../context/DarkMode";
import { useTotalPrice } from "../../../context/TotalPrice";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { total } = useTotalPrice();
  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  const LogoutHandler = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Cart");
    window.location.href = "/";
  };
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className="flex items-center justify-end h-20 px-5 font-semibold text-white bg-blue-500 text-md">
      Halo , {username} !
      <Button classname="mx-5 bg-black rounded-md" onClick={LogoutHandler}>
        Logout
      </Button>
      <div className="flex items-center p-2 bg-black rounded-md">
        Item : {totalCart} Price: ${total}
      </div>
      <Button
        classname="px-5 mx-5 font-semibold text-white bg-black rounded-md "
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};
export default Navbar;
