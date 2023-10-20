// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item";
import { selectProductsTotalPrice } from "../../redux/reducers/Cart/cart-selectiors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer)
  const productPriceTotal = useSelector(selectProductsTotalPrice)
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {
          products.map(product => <CartItem key={product.id} product={product} />)
        }
        <Styles.CartTotal>
          Total R$:{productPriceTotal}
        </Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
