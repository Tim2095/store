import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const cartAmount = useSelector(state => state.cart.totalAmount)

  return (
    <header>
      <nav>
        <ul className={classes.list + ' container'}>
          <div className={classes.logo}>
            <h3>Dummy Shop</h3>
          </div>
          <div className={classes.links}>
            <li>
              <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="">Home</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="products">Shop</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="services">Services</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="about">About</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="contact">Contact</NavLink>
            </li>
            <li className={classes.cart}>
              <NavLink className={({isActive}) => isActive ? classes.active : undefined} to="cart">Cart({cartAmount})</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
