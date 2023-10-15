import { useCustomerContext } from "../../../../../hooks/useCustomerContext";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../models";

export type CartProductProps = {
  product: Product;
};

const CartProduct = ({ product }: CartProductProps) => {
  const { addToCart, deleteOneToCart } = useCustomerContext(CartContext);
  return (
    <li
      style={{
        display: "flex",
        gap: "0.5rem",
        width: "100%",
        height: "112px",
      }}
    >
      <div
        style={{
          height: "100%",
          maxWidth: "120px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            objectPosition: "center center",
          }}
        />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ lineHeight: 1 }}>
          <p
            style={{
              fontWeight: "700",
              fontSize: "12px",
              color: "#4C6980",
              textTransform: "capitalize",
            }}
          >
            {product.brand}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#002849",
              textTransform: "capitalize",
            }}
          >
            {product.name}
          </p>
          <p
            style={{
              color: "var(--blue)",
              fontSize: "16px",
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            s/. {product.price}
          </p>
        </div>
        <div
          style={{
            width: "50%",
            border: "1px solid #15DBFF",
            borderRadius: "8px",
            display: "flex",
            height: "34px",
          }}
        >
          <button
            style={{
              background: "transparent",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              color: "#15DBFF",
              width: "30%",
              height: "100%",
              fontWeight: "bold",
            }}
            onClick={() => deleteOneToCart(product)}
          >
            -
          </button>
          <span
            style={{
              alignSelf: "center",
              width: "40%",
              textAlign: "center",
              color: "#002849",
              fontWeight: "bold",
            }}
          >
            {product.quantity}
          </span>
          <button
            style={{
              background: "transparent",
              fontSize: "1rem",
              border: "none",
              cursor: "pointer",
              color: "#15DBFF",
              width: "30%",
              height: "100%",
              fontWeight: "bold",
            }}
            onClick={() => addToCart(product)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
