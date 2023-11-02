import { useEffect, useState } from "react";
import { NavigatorProducts, FilterProducts } from "..";
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
        padding: "6rem 0",
        display: "flex",
        gap: "1rem",
        alignItems: "flex-start",
        width: "90%",
        marginInline: "auto",
      }}
    >
      {/* <NavigatorProducts /> */}
      <FilterProducts />
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
