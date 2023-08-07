import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItems = useSelector((cart) => cart.cart.items)
  const totalPrice = useSelector((cart) => cart.cart.totalPrice)
  return (
    <div className={classes['cart-cnt']}>
      {cartItems.length === 0 && <h2 className={classes['empty-cart']}> Your Cart Is Empty</h2>}
      {cartItems.map(item => <CartItem key={item.id} id={item.id} title={item.title} price={item.price} amount={item.amount} />)}
      {cartItems.length !== 0 && <div className={classes['total-price'] + ' container'}>
        <h2>Total Price:</h2>
        <p>{totalPrice.toFixed(2)}$</p>
      </div>}
    </div>
  )
}

export default Cart