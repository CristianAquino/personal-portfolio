import { useEffect } from "react";
import { Navigator, Panel, Products } from "./components";
export type EcommerceProps = {};

const Ecommerce = ({}: EcommerceProps) => {
  useEffect(() => {
    document.getElementById("root").style.background = "#fff";
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navigator />
      <Panel />
      <Products />
    </div>
  );
};

export default Ecommerce;
