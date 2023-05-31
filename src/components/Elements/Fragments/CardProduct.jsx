import Button from "../Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-xs mx-2 my-4 bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="h-full px-5 pb-3">
      <a href="#">
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-sm text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, addToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-3">
      <span className="text-lg font-semibold text-white">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-500 rounded-md" onClick={() => addToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
