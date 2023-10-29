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
        gap: "0.5rem",
        width: "100%",
        height: "112px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          height: "100%",
          width: "40%",
          maxWidth: "120px",
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "8px",
        }}
      />
      <div
        style={{
          height: "100%",
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ position: "relative" }}>
          <BrandProduct>{product.brand}</BrandProduct>
          <NameProduct>{product.name}</NameProduct>
          <PriceProduct>s/. {product.unitPrice}</PriceProduct>
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
            height: "34px",
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
