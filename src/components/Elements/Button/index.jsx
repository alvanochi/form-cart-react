const Button = (props) => {
  const { children, classname, onClick = () => {}, type = "button" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold  my-3 ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
