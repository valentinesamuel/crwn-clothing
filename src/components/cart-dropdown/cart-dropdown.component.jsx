import { CartDropdownContainer, CartItems,EmptyMessage } from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (cartItems.map((item) => (
          <CartItem CartItem={item} key={item.id} />
        ))) : (
            <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
        
      </CartItems>

      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
