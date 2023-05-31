const Label = (props) => {
  const { For, children } = props;
  return (
    <label htmlFor={For} className="font-bold text-xs block ">
      {children}
    </label>
  );
};
export default Label;
