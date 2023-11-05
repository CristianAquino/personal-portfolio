import { BsCart } from "react-icons/bs";
import { openCart } from "../../services";
import { ButtonCart } from "../../style-components";
import { LogoEcommerce, SearchProduct } from "./components";
import { Header } from "./style-components";

export type NavigatorEcomerceProps = {};

const NavigatorEcomerce = ({}: NavigatorEcomerceProps) => {
  const handldeOpenCart = () => {
    openCart.setSubject(true);
  };

  return (
    <Header>
      <LogoEcommerce />
      <SearchProduct />
      <ButtonCart onClick={handldeOpenCart} style={{ width: "10%" }}>
        <BsCart />
      </ButtonCart>
    </Header>
  );
};

export default NavigatorEcomerce;
