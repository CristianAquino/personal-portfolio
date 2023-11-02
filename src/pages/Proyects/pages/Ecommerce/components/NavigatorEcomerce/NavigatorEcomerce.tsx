import { PROYECTS_ROUTE, PUBLIC_ROUTE } from "@app/routes";
import { EcomerceLogo } from "@assets/ecomerceLogo";
import { BsCart, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { openCart } from "../../services";
import { ButtonCart } from "../../style-components";
import { ButtonSearch, Header, InputSearch } from "./style-components";
export type NavigatorEcomerceProps = {};

const NavigatorEcomerce = ({}: NavigatorEcomerceProps) => {
  const handldeOpenCart = () => {
    openCart.setSubject(true);
  };

  return (
    <Header>
      <Link
        to={PUBLIC_ROUTE.PROYECTS + PROYECTS_ROUTE.ECOMMERCE}
        className="logo"
        style={{
          margin: "0 auto",
          width: "20%",
        }}
      >
        <EcomerceLogo />
      </Link>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          width: "70%",
        }}
      >
        <form
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <InputSearch type="text" placeholder="Enter your search product" />
          <ButtonSearch>
            <BsSearch />
          </ButtonSearch>
        </form>
      </div>
      <ButtonCart onClick={handldeOpenCart} style={{ width: "10%" }}>
        <BsCart />
      </ButtonCart>
    </Header>
  );
};

export default NavigatorEcomerce;
