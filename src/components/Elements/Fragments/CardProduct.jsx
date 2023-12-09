import { Link } from "react-router-dom";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-xs mx-2 my-4 bg-gray-800 border border-gray-700 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image, id } = props;
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt="product"
        className="object-cover w-full p-8 rounded-t-lg h-60"
      />
    </Link>
  );
};

const Body = (props) => {
  const { children, title } = props;
  return (
    <div className="h-full px-5 pb-3">
      <a href="#">
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)}
        </h5>
        <p className="text-sm text-white">{children.substring(0, 50)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-3">
      <span className="text-lg font-semibold text-white">
        ${" "}
        {price.toLocaleString("us-US", {
          styles: "currency",
          currency: "USD",
        })}
      </span>
      <Button
        classname="bg-blue-500 rounded-md"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))}
      >
        Add to Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
