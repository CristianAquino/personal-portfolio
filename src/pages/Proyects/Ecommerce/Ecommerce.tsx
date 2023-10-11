import { Button, Navigator, Panel } from "./components";
export type EcommerceProps = {};

const Ecommerce = ({}: EcommerceProps) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Navigator />
      <Panel />
      <main
        style={{
          width: "100%",
          padding: "24px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <nav style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <Button>most recent</Button>
          <Button>lower recent</Button>
          <Button>hightes recent</Button>
        </nav>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(309px, 1fr))",
            gridAutoRows: "435px",
            gap: "16px",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              // gap: "8px",
              justifyContent: "space-between",
            }}
          >
            <img
              // src="https://www.efe.com.pe/media/catalog/product/h/e/heg-s-kaaaa_1_aahzfe40jvrthydy.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
              src="https://i.dummyjson.com/data/products/6/1.png"
              alt=""
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <div>
              <p
                style={{
                  color: "#4C6980",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                marca
              </p>
              <p
                style={{
                  color: "#002849",
                  fontSize: "16px",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                nombre del producto que se piensa vender
              </p>
              <p
                style={{
                  color: "var(--blue)",
                  fontSize: "16px",
                  textTransform: "uppercase",
                  fontWeight: "700",
                }}
              >
                s/. 999,999.99
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
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </main>
    </div>
  );
};

export default Ecommerce;
