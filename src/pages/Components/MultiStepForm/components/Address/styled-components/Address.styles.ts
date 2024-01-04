import styled from "styled-components";

const Container = styled.div`
  block-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
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
`;
export { Container, FormContainer };
