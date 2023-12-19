import styled from "styled-components";

const Container = styled.label`
  display: grid;
  place-content: center;
  inline-size: 40vmin;
  block-size: 40vmin;
  font-size: 20vmin;
  background-color: gray;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, outline-offset 0.3s ease;

  & input {
    appearance: none;
  }
  &:has(:checked) {
    background-color: deeppink;
  }
  &:not(:active) {
    outline-offset: 1rem;
  }
  &:focus-within {
    outline: 0.25rem solid deeppink;
  }
`;
const Boton = styled.button<{ location?: string }>`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: capitalize;
  font-size: 1.2rem;
  ${(props) => {
    switch (props.location) {
      case "left":
        return "flex-direction: row-reverse;";
      case "right":
        return "flex-direction: row;";
      default:
        return "flex-direction: row;";
    }
  }}
`;
export { Container, Boton };
