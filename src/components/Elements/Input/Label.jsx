import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Label = (props) => {
  const { For, children } = props;
  const { isDarkMode } = useContext(DarkMode);
  return (
    <label
      htmlFor={For}
      className={`font-bold text-xs block ${isDarkMode && "text-white"}`}
    >
      {children}
    </label>
  );
};
export default Label;
