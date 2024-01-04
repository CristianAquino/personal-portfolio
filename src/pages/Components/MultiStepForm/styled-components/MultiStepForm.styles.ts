import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  inline-size: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
const Footer = styled.div`
  inline-size: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1rem;
  font-size: 1rem;
`;
const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1rem;
  inline-size: 80vmax;
  min-block-size: 64vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 4vmin 8vmin;
`;
const Form = styled.form`
  inline-size: 100%;
  block-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`;
export { Button, Container, Form, Footer };
