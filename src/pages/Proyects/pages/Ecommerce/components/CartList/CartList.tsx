import { useCallback } from "react";
import { CartInList } from "..";
import { useCustomerContext } from "../../../../../../hooks/useCustomerContext";
import { CartContext } from "../../context/CartContext";
import { checkout } from "../../services";
import { ButtonNavigate } from "../../style-components";

export type CartListProps = {};

const CartList = ({}: CartListProps) => {
  const { cart } = useCustomerContext(CartContext);
  const checkoutCart = useCallback(async () => {
    const a = await checkout(cart);
    console.log(a);
  }, []);
  return (
    <div
      style={{
        padding: "24px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <p
        style={{
          color: "var(--nameP)",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "capitalize",
        }}
      >
        hola estas a un paso de completar tu compra, pero antes te pedimos que
        verifiques que los productos que visualizas sean los que necesitas.
      </p>
      {cart.map((product) => (
        <CartInList cart={product} key={product.id} />
      ))}
      <div style={{ color: "black", width: "30%", alignSelf: "flex-end" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            subtotal
          </span>
          <span
            style={{
              fontSize: "16px",
              textTransform: "capitalize",
            }}
          >
            {" "}
            s/.{" "}
            {cart.reduce(
              (acc, curr) => acc + curr.unitPrice * curr.quantity,
              0
            )}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            descuento
          </span>
          <span
            style={{
              fontSize: "16px",
              textTransform: "capitalize",
            }}
          >
            {" "}
            s/. {cart.reduce((acc, curr) => acc + curr.unitPrice, 0) * 0.1}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            total
          </span>
          <span
            style={{
              fontSize: "16px",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {" "}
            s/.{" "}
            {cart.reduce(
              (acc, curr) => acc + curr.unitPrice * curr.quantity,
              0
            )}
          </span>
        </div>
        <ButtonNavigate
          style={{ width: "100%", marginTop: "16px" }}
          onClick={checkoutCart}
        >
          Pagar
        </ButtonNavigate>
      </div>
    </div>
  );
};

export default CartList;
