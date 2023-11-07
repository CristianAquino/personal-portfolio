import { useCustomerContext } from "@hooks/index";
import { useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../models";
import { openCart } from "../../services";
import {
  BrandProduct,
  ButtonCountProduct,
  NameProduct,
  PriceProduct,
  QuantityCart,
} from "../../style-components";
import {
  CartInListActions,
  CartInListActionsContent,
  CartInListBoxImg,
  CartInListImg,
  CartInListLi,
} from "./styled-component";

export type CartInListProps = {
  cart: Product;
};

const CartInList = ({ cart }: CartInListProps) => {
  const { addToCart, deleteOneToCart, removeFromCart } =
    useCustomerContext(CartContext);

  useEffect(() => {
    const ecommerceParams = window.location.pathname.endsWith("ecommerce");
    if (!ecommerceParams) {
      openCart.setSubject(false);
    }
  }, []);

  return (
    <CartInListLi>
      <CartInListBoxImg>
        <CartInListImg src={cart.image} alt={cart.name} />
      </CartInListBoxImg>
      <div style={{ flexGrow: 2, width: "50%" }}>
        <BrandProduct style={{ fontSize: "1rem" }}>{cart.brand}</BrandProduct>
        <NameProduct style={{ fontSize: "1.5rem" }}>{cart.name}</NameProduct>
      </div>
      <PriceProduct
        style={{
          alignSelf: "center",
          flexGrow: 1,
          width: "10%",
        }}
      >
        s/. {cart.unitPrice}
      </PriceProduct>
      <CartInListActions>
        <CartInListActionsContent>
          <ButtonCountProduct onClick={() => deleteOneToCart(cart)}>
            -
          </ButtonCountProduct>
          <QuantityCart>{cart.quantity}</QuantityCart>
          <ButtonCountProduct onClick={() => addToCart(cart)}>
            +
          </ButtonCountProduct>
        </CartInListActionsContent>
        <BsTrash3
          style={{ fontSize: "36px", color: "var(--primary)" }}
          onClick={() => removeFromCart(cart)}
        />
      </CartInListActions>
    </CartInListLi>
  );
};

export default CartInList;
