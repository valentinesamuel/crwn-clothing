import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
const {cartItems} = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => <CartItem CartItem={item} key={item.id}/>)}
      </div>

      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
