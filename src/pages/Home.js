import { Link } from "react-router-dom";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={classes.product}>
        <Link to='products' className={classes['product-check']}>Check Out Our Products</Link>
      </div>
    </>
  );
};

export default Home;
