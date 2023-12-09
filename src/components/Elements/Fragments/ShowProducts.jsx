import CardProduct from "./CardProduct";

export const ShowProduct = (products) => {
  return (
    products.length > 0 &&
    products.map((product) => (
      <CardProduct key={product.id}>
        <CardProduct.Header image={product.image} id={product.id} />
        <CardProduct.Body title={product.title}>
          {product.description}
        </CardProduct.Body>
        <CardProduct.Footer price={product.price} id={product.id} />
      </CardProduct>
    ))
  );
};
