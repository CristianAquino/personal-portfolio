import { useEffect, useState } from "react";
import { NavigatorProducts } from "..";
import { Product } from "../../models";
import { getproducts } from "../../services";
import { GridProducts } from "../../style-components";
import { CardProduct } from "../CardProduct";

export type ProductsProps = {};

const Products = ({}: ProductsProps) => {
  const [products, setProducts] = useState([]);
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
        width: "100%",
        padding: "24px 32px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <NavigatorProducts />
      <GridProducts>
        {products.length > 0 ? (
          products.map((product: Product) => (
            <CardProduct key={product.id} product={product} />
          ))
        ) : (
          <p style={{ color: "black" }}>No hay productos</p>
        )}
      </GridProducts>
    </main>
  );
};

export default Products;
