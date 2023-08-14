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

  const removeItemHandler = () => {
    dispatch(cartActions.removeItem(id))
  }

  return (
    <div className={classes["cart-cnt"] + " container"}>
      <div className={classes["cart-heading"]}>
        <p className={classes.title}>{title}</p>
        <div className={classes.amount}>{amount}</div>
        <div className={classes["amount-btn"]}>
          <button onClick={addItemHandler}>+</button>
          <button onClick={removeItemHandler}>-</button>
        </div>
      </div>
      <div className={classes['cart-product-price']}>
        <h4 className={classes.price}>Price</h4>
        <p className={classes.price}>{price}$</p>
      </div>
    </div>
  );
};

export default CartItem;
