import { BsCart, BsSearch } from "react-icons/bs";
import { ButtonCart } from "../../style-components";
import { openCart } from "../../services";
import { ButtonSearch, Header, InputSearch } from "./style-components";
export type NavigatorEcomerceProps = {};

const NavigatorEcomerce = ({}: NavigatorEcomerceProps) => {
  const handldeOpenCart = () => {
    openCart.setSubject(true);
  };

  return (
    <Header>
      <div
        className="logo"
        style={{
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "100%",
            background: "#FFAD48",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <form style={{ width: "100%", height: "100%", position: "relative" }}>
          <InputSearch type="text" placeholder="Enter your search product" />
          <ButtonSearch>
            <BsSearch />
          </ButtonSearch>
        </form>
        <ButtonCart onClick={handldeOpenCart}>
          <BsCart />
        </ButtonCart>
      </div>
    </Header>
  );
};

export default NavigatorEcomerce;
