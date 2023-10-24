import { BsCart } from "react-icons/bs";
import { ButtonCart } from "../../style-components";
import { openCart } from "../../services";
export type NavigatorProps = {};

const Navigator = ({}: NavigatorProps) => {
  const handldeOpenCart = () => {
    openCart.setSubject(true);
  };

  return (
    <nav
      style={{
        height: "160px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        borderBottom: "1px solid var(--primary)",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#FFAD48",
          borderRadius: "50%",
        }}
      ></div>
      <ButtonCart onClick={handldeOpenCart}>
        <BsCart />
      </ButtonCart>
    </nav>
  );
};

export default Navigator;
