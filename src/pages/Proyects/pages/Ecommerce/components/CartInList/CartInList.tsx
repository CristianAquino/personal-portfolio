import { BsTrash3 } from "react-icons/bs";
import {
  BrandProduct,
  ButtonCountProduct,
  NameProduct,
  PriceProduct,
} from "../../style-components";
import { Product } from "../../models";
import { CartContext } from "../../context/CartContext";
import { useCustomerContext } from "@hooks/index";

export type CartInListProps = {
  cart: Product;
};

const CartInList = ({ cart }: CartInListProps) => {
  const { addToCart, deleteOneToCart, removeFromCart } =
    useCustomerContext(CartContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        color: "black",
      }}
    >
      <div
        style={{
          padding: "16px 0",
          borderBottom: "2px solid var(--primary)",
          display: "flex",
          width: "100%",
          height: "162px",
          gap: "1rem",
        }}
      >
        <div
          style={{
            maxWidth: "112px",
            height: "100%",
            flexGrow: 1,
          }}
        >
          <img
            src={cart.image}
            alt={cart.name}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div style={{ flexGrow: 2 }}>
          <BrandProduct style={{ fontSize: "1rem" }}>{cart.brand}</BrandProduct>
          <NameProduct style={{ fontSize: "1.5rem" }}>{cart.name}</NameProduct>
        </div>
        <PriceProduct style={{ alignSelf: "center", flexGrow: 1 }}>
          s/. {cart.unitPrice}
        </PriceProduct>
        <div style={{ display: "flex", alignSelf: "center", flexGrow: 1 }}>
          <div
            style={{
              width: "165px",
              border: "1px solid var(--primary)",
              borderRadius: "8px",
              display: "flex",
              height: "34px",
              marginRight: "16px",
            }}
          >
            <ButtonCountProduct onClick={() => deleteOneToCart(cart)}>
              -
            </ButtonCountProduct>
            <span
              style={{
                alignSelf: "center",
                width: "40%",
                textAlign: "center",
                color: "#002849",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {cart.quantity}
            </span>
            <ButtonCountProduct onClick={() => addToCart(cart)}>
              +
            </ButtonCountProduct>
          </div>
          <BsTrash3
            style={{ fontSize: "28px", color: "var(--primary)" }}
            onClick={() => removeFromCart(cart)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartInList;
