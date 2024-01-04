import styled from "styled-components";

const Container = styled.div`
  display: flex;
  block-size: 100%;
`;
const Left = styled.div`
  inline-size: 50%;
  padding: 1rem 2rem;
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
  text-transform: capitalize;

  & section {
    block-size: 100%;
    border: 1px solid white;
  }
  & button {
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    inline-size: 40%;
    align-self: center;
    text-transform: capitalize;
    cursor: pointer;
    background-color: #ff9a3e;
  }
  & button:hover {
    opacity: 0.8;
  }
`;
const Drawing = styled.canvas`
  block-size: 100%;
  inline-size: 100%;
  background-color: #fff;
`;
export { Container, Drawing, Left, Righ };
