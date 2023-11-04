import { useEffect, useState } from "react";
import { NavigatorProducts, FilterProducts, Brands } from "..";
import { Product } from "../../models";
import { getproducts } from "../../services";
import { GridProducts } from "../../style-components";
import { CardProduct } from "../CardProduct";

export type ProductsProps = {};

const Products = ({}: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function callAllProducts() {
      const data = await getproducts();
      setProducts(data);
    }
    callAllProducts();
  }, []);
  return (
    <main
      style={{
        padding: "6rem 0",
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        width: "90%",
        marginInline: "auto",
      }}
    >
      {/* <NavigatorProducts /> */}
      <FilterProducts />
      <div style={{ width: "80%" }}>
        <div
          style={{
            color: "black",
            padding: "1rem 0",
            display: "flex",
            position: "sticky",
            top: "96px",
            zIndex: 3,
            background: "#fff",
            borderBottom: "1px solid var(--primary)",
          }}
        >
          <h3
            style={{
              fontSize: "clamp(1rem, 1rem + 0.7vw, 2rem)",
              display: "inline",
            }}
          >
            Brands:
          </h3>
          <Brands />
        </div>
        <GridProducts>
          {products.length > 0 ? (
            products.map((product: Product) => (
              <CardProduct key={product.id} product={product} />
            ))
          ) : (
            <p style={{ color: "black" }}>No hay productos</p>
          )}
        </GridProducts>
      </div>
    </main>
  );
};

export default Products;
