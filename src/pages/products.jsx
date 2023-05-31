import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Elements/Fragments/CardProduct";
import Counter from "../components/Elements/Fragments/Counter";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      image: "./public/images/shoes2.jpg",
      title: "Nike Air Max",
      price: 3500000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam culpa officiis tempore autem consequuntur aliquam magni reprehenderit quisquam inventore!",
    },
    {
      id: 2,
      image: "./public/images/shoes2.jpg",
      title: "Nike Maxstream",
      price: 5200000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam culpa officiis tempore autem consequuntur aliquam magni reprehenderit quisquam inventore!",
    },
    {
      id: 3,
      image: "./public/images/shoes2.jpg",
      title: "Nike Air Pro",
      price: 4500000,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, beatae!",
    },
    {
      id: 4,
      image: "./public/images/shoes2.jpg",
      title: "Nike Air ProMax",
      price: 8650000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ullam culpa officiis tempore autem consequuntur aliquam magni reprehenderit quisquam inventore!",
    },
  ];
  const name = localStorage.getItem("Full Name");
  const LogoutHandler = () => {
    localStorage.removeItem("Email");
    localStorage.removeItem("Password");
    localStorage.removeItem("Full Name");
    localStorage.removeItem("Cart");
    window.location.href = "/";
  };
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("Cart")) || []);
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
  }, [cart]);
  const addToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);
  return (
    <>
      <div className="flex items-center justify-end h-20 px-5 font-semibold text-white bg-blue-500 text-md">
        Halo , {name} !
        <Button classname="mx-5 bg-black rounded-md" onClick={LogoutHandler}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />

              <CardProduct.Body title={product.title}>
                {product.desc}
              </CardProduct.Body>

              <CardProduct.Footer
                price={product.price}
                addToCart={addToCart}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="ml-4 text-3xl font-bold text-blue-600 ">Cart</h1>

          <table className="text-left border-separate table-auto border-spacing-x-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Counter></Counter>
    </>
  );
};
export default ProductPage;
