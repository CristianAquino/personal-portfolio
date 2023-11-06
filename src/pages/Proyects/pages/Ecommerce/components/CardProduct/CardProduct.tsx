import { unitDecimal } from "@helpers/index";
import { useCustomerContext } from "@hooks/index";
import { CartContext } from "../../context/CartContext";
import { Product } from "../../models";
import { ButtonAddToCart } from "../../style-components";
import {
  BrandProduct,
  CartToProduct,
  NameProduct,
  PriceProduct,
} from "../../style-components/Product.style";
import { CardImageProduct } from "./styled-component";

export type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product }: CardProductProps) => {
  const { addToCart } = useCustomerContext(CartContext);
  const newPrice = unitDecimal(product.unitPrice);
  return (
    <CartToProduct>
      {/* <CartToProduct data-parent={product.dsc}> */}
      <CardImageProduct src={product.image} alt={product.name} />
      <div style={{ padding: ".5rem 0" }}>
        <BrandProduct>{product.brand}</BrandProduct>
        <NameProduct>{product.name}</NameProduct>
        <PriceProduct>s/. {newPrice}</PriceProduct>
      </div>
      <ButtonAddToCart onClick={() => addToCart(product)}>
        agregar al carrito
      </ButtonAddToCart>
    </CartToProduct>
  );
};

export default CardProduct;
