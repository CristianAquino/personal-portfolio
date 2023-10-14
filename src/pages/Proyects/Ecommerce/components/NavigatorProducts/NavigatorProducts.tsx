import { Button } from "../Button";

export type NavigatorProductsProps = {};

const NavigatorProducts = ({}: NavigatorProductsProps) => {
  return (
    <nav style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
      <Button>most recent</Button>
      <Button>lower price</Button>
      <Button>hightes price</Button>
    </nav>
  );
};

export default NavigatorProducts;
