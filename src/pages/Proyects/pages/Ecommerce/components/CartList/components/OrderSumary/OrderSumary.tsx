import { useCallback } from "react";
import { checkout } from "../../../../services";
import { useCustomerContext } from "@app/hooks";
import { CartContext } from "../../../../context/CartContext";
import { ButtonNavigate } from "../../../../style-components";

export type OrderSumaryProps = {};

const OrderSumary = ({}: OrderSumaryProps) => {
  const { cart } = useCustomerContext(CartContext);

  const checkoutCart = useCallback(async () => {
    const data = await checkout(cart);
    window.location.href = data.url;
  }, []);

  return (
    <div
      style={{
        color: "black",
        width: "30%",
        position: "sticky",
        top: "112px",
      }}
    >
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
          {cart.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0)}
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
          {cart.reduce((acc, curr) => acc + curr.unitPrice * curr.quantity, 0)}
        </span>
      </div>
      <ButtonNavigate
        style={{ width: "100%", marginTop: "16px" }}
        onClick={checkoutCart}
      >
        Pagar
      </ButtonNavigate>
    </div>
  );
};

export default OrderSumary;
