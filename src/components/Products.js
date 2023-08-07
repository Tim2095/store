import classes from "./Products.module.css";
import ProductItem from "./ProductItem";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const data = useLoaderData()
  return (
    <div className={classes.products}>
      <div className={`${classes['products-cnt'] + ' container'}`}>
        {data.map(products => <ProductItem key={products.id} id={products.id} title={products.title} price={products.price} image={products.image} />)}
      </div>
    </div>
  );
};

export default Products;

export const loader = async () => {
  const request = await fetch('https://fakestoreapi.com/products')
  
  const response = await request.json()
  return response
}
