import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: #15dbff;
  border-radius: 8px;
  border: none;
`;

const ButtonCart = styled(Button)`
  width: 64px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

const ButtonNavigate = styled(Button)`
  padding: 16px;
  font-size: 1rem;
  text-transform: uppercase;
`;

const ButtonAddToCart = styled(Button)`
  padding: 16px;
  font-size: 1rem;
  text-transform: uppercase;
  width: 100%;
`;

const ButtonClose = styled(ButtonNavigate)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-self: center;
  background-color: #c4c4c4;
`;

const ButtonRemoveToCart = styled(ButtonClose)`
  font-size: 1rem;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

const GoToPay = styled(Link)`
  background: #15dbff;
  border-radius: 8px;
  padding: 16px;
  font-size: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: #fff;
  text-align: center;
`;

export {
  ButtonCart,
  Button,
  ButtonNavigate,
  ButtonAddToCart,
  ButtonClose,
  ButtonRemoveToCart,
  GoToPay,
};
