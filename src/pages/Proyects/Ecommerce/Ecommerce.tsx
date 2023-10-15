import { Suspense, lazy, useEffect } from "react";
import { Navigator, Panel, Products } from "./components";
import { CartProvider } from "./context/CartContext";
const Cart = lazy(() => import("./components/Cart/Cart"));

export type EcommerceProps = {};

const Ecommerce = ({}: EcommerceProps) => {
  useEffect(() => {
    const root = document.getElementById("root") as HTMLElement;
    root.style.background = "#fff";
  }, []);
  return (
    <CartProvider>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Navigator />
        <Suspense fallback={<div>Loading...</div>}>
          <Cart />
        </Suspense>
        <Panel />
        <Products />
      </div>
    </CartProvider>
  );
};

export default Ecommerce;
