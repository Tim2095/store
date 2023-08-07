import classes from "./ProductItem.module.css";
import { cartActions } from "../store/cart-slice";
import { useDispatch, } from "react-redux";
import { Link } from "react-router-dom";
const ProductItem = ({ title, price, image, id }) => {
  const dispatch = useDispatch();

  // const cartState = useSelector((state) => state);
 
  const addItemHandler = () => {
    const newItem = {
      id: id,
      title: title,
      price: price,
      amount: 1
    }
    dispatch(cartActions.addToCart(newItem));

  };

  return (
    <div className={classes["product-item"]}>
      <div className={classes["product-image-cnt"]}>
        <Link to={`${id}`}>
          <img className={classes["product-image"]} src={image} alt="product" />
        </Link>
      </div>
      <div className={classes["product-details"]}>
        <Link to={`${id}`}><p>{title}</p></Link>
        <div>{price}</div>
      </div>
      <div className={classes["add-btn"]}>
        <button onClick={addItemHandler}>Add</button>
      </div>
    </div>
  );
};

export default ProductItem;
