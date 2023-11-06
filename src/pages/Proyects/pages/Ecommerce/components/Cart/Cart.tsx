import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CartProduct } from "..";
import { useCustomerContext } from "@hooks/index";
import { CartContext } from "../../context/CartContext";
import { openCart } from "../../services";
import { ButtonClose, GoToPay } from "../../style-components";

export type CartProps = {};

const Cart = ({}: CartProps) => {
  const { cart } = useCustomerContext(CartContext);
  const [open, setOpen] = useState(false);
  const subscription = openCart.getSubject();

  const handldeCloseCart = () => {
    openCart.setSubject(false);
  };

  useEffect(() => {
    subscription.subscribe((data) => {
      data ? setOpen(true) : setOpen(false);
    });
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        background: "rgb(25 25 25 /0.3)",
        zIndex: 9,
        minHeight: "100dvh",
        top: 0,
        left: 0,
        display: `${open ? "flex" : "none"}`,
      }}
    >
      <div
        style={{
          width: "40%",
          position: "absolute",
          right: "5%",
          top: "96px",
          zIndex: 5,
          borderRadius: "0 0 8px 8px",
          padding: "16px",
          display: `${open ? "flex" : "none"}`,
          gap: "16px",
          flexDirection: "column",
          background: "#fff",
          maxHeight: "calc(70dvh - 96px)",
        }}
      >
        <ButtonClose
          style={{
            position: "fixed",
            width: "40px",
            height: "40px",
            textAlign: "center",
          }}
          onClick={handldeCloseCart}
        >
          x
        </ButtonClose>
        {cart.length == 0 ? (
          <div
            style={{
              color: "#c4c4c4",
              textAlign: "center",
              fontSize: "16px",
              marginTop: "56px",
            }}
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
                marginTop: "56px",
                overflowY: "scroll",
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
                fontSize: "1.75rem",
                lineHeight: 1,
              }}
            >
              <p>subtotal</p>
              <p>
                S/.{" "}
                {cart.reduce(
                  (acc, curr) => acc + curr.unitPrice * curr.quantity,
                  0
                )}
              </p>
            </div>
            <GoToPay to={"cart"}>ir a pagar</GoToPay>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
