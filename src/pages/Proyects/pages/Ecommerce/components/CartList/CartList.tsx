import { useCustomerContext } from "@hooks/index";
import { CartInList } from "..";
import { CartContext } from "../../context/CartContext";
import { Main } from "../../style-components/General.style";
import { OrderSumary } from "./components/OrderSumary";
import {
  CartListContent,
  MessageProducts,
  ProductsCartListContent,
} from "./styled-component";

export type CartListProps = {};

const CartList = ({}: CartListProps) => {
  const { cart } = useCustomerContext(CartContext);

  return (
    <Main
      style={{
        flexDirection: "column",
      }}
    >
      <MessageProducts>
        hola estas a un paso de completar tu compra, pero antes te pedimos que
        verifiques que los productos que visualizas sean los que necesitas.
      </MessageProducts>
      <CartListContent>
        <ProductsCartListContent>
          {cart.map((product) => (
            <CartInList product={product} key={product.id} />
          ))}
        </ProductsCartListContent>
        <OrderSumary />
      </CartListContent>
    </Main>
  );
};

export default CartList;
