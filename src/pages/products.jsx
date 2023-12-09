import { useContext, useEffect, useState } from "react";
import Counter from "../components/Elements/Fragments/Counter";
import getProducts from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Elements/Fragments/TableCart";
import Navbar from "../components/Elements/Layout/Navbar";
import { ShowProduct } from "../components/Elements/Fragments/ShowProducts";
import { DarkMode } from "../context/DarkMode";

const ProductPage = () => {
  useLogin();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  const { isDarkMode } = useContext(DarkMode);

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        <div className="flex flex-wrap w-4/6">{ShowProduct(products)}</div>
        <div className="w-2/6">
          <h1 className="ml-4 text-3xl font-bold text-blue-600 ">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      <Counter></Counter>
    </>
  );
};
export default ProductPage;
