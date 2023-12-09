import axios from "axios";

// const getProducts = async () => {
//   const res = await axios.get("https://fakestoreapi.com/products?limit=5");
//   const data = await res.data;
//   console.log(data);
//   return data;
// };

// export default getProducts;

const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products?limit=6")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getProducts;
