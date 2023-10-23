import imgCategory from "../../../../../assets/header-x1.jpg";

export type PanelProps = {};

const Panel = ({}: PanelProps) => {
  return (
    <div
      style={{
        width: "1024px",
        position: "relative",
        height: "640px",
        overflow: "hidden",
        fontSize: "3rem",
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      <img
        src={imgCategory}
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          height: "100%",
        }}
        alt=""
      />
      <p style={{ position: "absolute", left: "16px", bottom: "16px" }}>
        electronics
      </p>
    </div>
  );
};

export default Panel;
