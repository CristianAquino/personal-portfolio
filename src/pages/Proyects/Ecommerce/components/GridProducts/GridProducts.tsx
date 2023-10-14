import { ReactNode } from "react";

export type GridProductsProps = {
  children: ReactNode;
};

const GridProducts = ({ children }: GridProductsProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(309px, 1fr))",
        gridAutoRows: "minmax(435px,1fr)",
        gap: "16px",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default GridProducts;
