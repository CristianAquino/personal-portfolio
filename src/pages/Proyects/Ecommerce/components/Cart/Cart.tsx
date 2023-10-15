import { Button, CartProduct } from "..";
import { useCustomerContext } from "../../../../../hooks/useCustomerContext";
import { CartContext } from "../../context/CartContext";
import { AiOutlineInfoCircle } from "react-icons/ai";

export type CartProps = {};

const Cart = ({}: CartProps) => {
  const { cart } = useCustomerContext(CartContext);

  return (
    <div
      style={{
        borderTop: "1px solid #15DBFF",
        width: "40%",
        position: "absolute",
        right: 0,
        top: "160px",
        zIndex: 2,
        borderRadius: "0 0 8px 8px",
        padding: "16px",
        display: "flex",
        gap: "16px",
        flexDirection: "column",
        background: "#fff",
        maxHeight: "100vh",
        overflowY: "scroll",
      }}
    >
      {cart.length == 0 ? (
        <div
          style={{ color: "#c4c4c4", textAlign: "center", fontSize: "16px" }}
        >
          <p>
            <AiOutlineInfoCircle />
            <br />
            Usted aun no tiene productos agregados a su carrito de compras
          </p>
        </div>
      ) : (
        <>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {cart.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              gap: "16px",
              color: "#15DBFF",
              textTransform: "capitalize",
              justifyContent: "space-between",
              width: "100%",
              fontWeight: "bold",
              fontSize: "1rem",
              lineHeight: 1,
            }}
          >
            <p>subtotal</p>
            <p>
              S/.{" "}
              {cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
            </p>
          </div>
          <Button>ir a pagar</Button>
        </>
      )}
    </div>
  );
};

export default Cart;
