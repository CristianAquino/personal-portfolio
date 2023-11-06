import { BsTrash3 } from "react-icons/bs";
import { useCustomerContext } from "@hooks/index";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../models";
import { ButtonRemoveToCart } from "../../style-components";
import {
  BrandProduct,
  ButtonCountProduct,
  NameProduct,
  PriceProduct,
} from "../../style-components/Product.style";

export type CartProductProps = {
  product: Product;
};

const CartProduct = ({ product }: CartProductProps) => {
  const { addToCart, deleteOneToCart, removeFromCart } =
    useCustomerContext(CartContext);
  return (
    <li
      style={{
        display: "flex",
        gap: "1rem",
        width: "100%",
        // height: "112px",
        height: "160px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          height: "100%",
          // width: "40%",
          // maxWidth: "120px",
          maxWidth: "160px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "8px",
          flexGrow: 1,
        }}
      />
      <div
        style={{
          height: "100%",
          // width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexGrow: 2,
        }}
      >
        <div style={{ position: "relative" }}>
          <BrandProduct style={{ fontSize: "1rem" }}>
            {product.brand}
          </BrandProduct>
          <NameProduct style={{ fontSize: "1.25rem" }}>
            {product.name}
          </NameProduct>
          <PriceProduct style={{ fontSize: "1.75rem" }}>
            s/. {product.unitPrice}
          </PriceProduct>
          <ButtonRemoveToCart onClick={() => removeFromCart(product)}>
            <BsTrash3 />
          </ButtonRemoveToCart>
        </div>
        <div
          style={{
            width: "50%",
            border: "1px solid var(--primary)",
            borderRadius: "8px",
            display: "flex",
            height: "36px",
          }}
        >
          <ButtonCountProduct onClick={() => deleteOneToCart(product)}>
            -
          </ButtonCountProduct>
          <span
            style={{
              alignSelf: "center",
              width: "40%",
              textAlign: "center",
              color: "#002849",
              fontWeight: "bold",
            }}
          >
            {product.quantity}
          </span>
          <ButtonCountProduct onClick={() => addToCart(product)}>
            +
          </ButtonCountProduct>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
