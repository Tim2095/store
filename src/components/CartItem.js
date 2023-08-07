import classes from "./CartItem.module.css";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
const CartItem = ({ title, price, amount, id }) => {
  const dispatch = useDispatch()
  const addItemHandler = () => {
    const newItem = {
      id: id,
      title: title,
      price: price,
      amount: 1
    }
    dispatch(cartActions.addToCart(newItem))
  }
  return (
    <div className={classes["cart-cnt"] + " container"}>
      <div className={classes["cart-heading"]}>
        <p>{title}</p>
        <div>{amount}</div>
        <div className={classes["amount-btn"]}>
          <button onClick={addItemHandler}>+</button>
          <button>-</button>
        </div>
      </div>
      <div className={classes['cart-product-price']}>
        <h4>Price</h4>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default CartItem;
