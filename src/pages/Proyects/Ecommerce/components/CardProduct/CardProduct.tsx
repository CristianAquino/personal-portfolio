import { unitDecimal } from "../../../../../helpers";
import { Product } from "../../models";

export type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product }: CardProductProps) => {
  const newPrice = unitDecimal(product.price);
  return (
    <div
      style={{
        width: "100%",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid #15DBFF",
        borderRadius: "8px",
      }}
    >
      <div style={{ width: "100%", borderRadius: "8px", overflow: "hidden" }}>
        <img
          //   src="https://www.efe.com.pe/media/catalog/product/h/e/heg-s-kaaaa_1_aahzfe40jvrthydy.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
          // src="https://i.dummyjson.com/data/products/6/1.png"
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      <div style={{ padding: "8px 0" }}>
        <p
          style={{
            color: "#4C6980",
            fontSize: "12px",
            textTransform: "uppercase",
          }}
        >
          {product.brand}
        </p>
        <p
          style={{
            color: "#002849",
            fontSize: "16px",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          {product.name}
        </p>
        <p
          style={{
            color: "var(--blue)",
            fontSize: "16px",
            textTransform: "uppercase",
            fontWeight: "700",
          }}
        >
          s/. {newPrice}
        </p>
      </div>
      <button
        style={{
          padding: "16px",
          background: "#15DBFF",
          borderRadius: "8px",
          fontSize: "1rem",
          border: "none",
          textTransform: "uppercase",
          cursor: "pointer",
          width: "100%",
        }}
      >
        agregar al carrito
      </button>
    </div>
  );
};

export default CardProduct;
