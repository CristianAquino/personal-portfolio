import { BsCart } from "react-icons/bs";
export type NavigatorProps = {};

const Navigator = ({}: NavigatorProps) => {
  return (
    <nav
      style={{
        height: "160px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
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
      <div
        style={{
          width: "100px",
          height: "100px",
          background: "#15DBFF",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "5rem",
        }}
      >
        <BsCart />
      </div>
    </nav>
  );
};

export default Navigator;
