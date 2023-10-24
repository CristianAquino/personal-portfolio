import { Suspense, lazy, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navigator } from "..";
import { CartProvider } from "../../context/CartContext";
const Cart = lazy(() => import("../Cart/Cart"));

export type LayoutEcomerceProps = {};

const LayoutEcomerce = ({}: LayoutEcomerceProps) => {
  useEffect(() => {
    const root = document.getElementById("root") as HTMLElement;
    root.style.background = "#fff";
    return () => {
      const root = document.getElementById("root") as HTMLElement;
      root.style.background = "var(--darkMode)";
    };
  }, []);
  return (
    <CartProvider>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Navigator />
        <Suspense fallback={<div>Loading...</div>}>
          <Cart />
        </Suspense>
        <Outlet />
      </div>
    </CartProvider>
  );
};

export default LayoutEcomerce;
