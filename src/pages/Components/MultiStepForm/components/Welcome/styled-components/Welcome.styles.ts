import styled from "styled-components";

const Container = styled.div`
  display: flex;
  block-size: 100%;
`;
const Left = styled.div`
  inline-size: 50%;
  padding: 1rem 2rem;
  text-align: center;
  & h1 {
    margin-block-end: 1rem;
    font-size: 4rem;
  }
  & p {
    max-inline-size: 66ch;
  }
`;
const Righ = styled.div`
  inline-size: 50%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FormContainer = styled.label`
  inline-size: 100%;
  & p {
    text-transform: capitalize;
  }
  & input {
    inline-size: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    border-block-end: 1px solid var(--primary);
    color: #ccc;
    padding-block-start: 0.5rem;
  }
  & span {
    color: red;
    text-transform: capitalize;
  }
`;
export { Container, FormContainer, Left, Righ };
