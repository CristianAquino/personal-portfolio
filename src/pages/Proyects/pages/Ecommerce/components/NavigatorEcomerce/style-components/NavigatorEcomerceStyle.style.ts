import styled from "styled-components";

const Header = styled.header`
  height: 96px;
  width: calc(100% - 200px);
  position: fixed;
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--primary);
  right: 100px;
  left: 100px;
`;

const InputSearch = styled.input`
  border-radius: 32px;
  background-color: #fff;
  color: #242424;
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  padding-left: 1.5rem;
  outline: none;
  caret-color: var(--primary);
  &::placeholder {
    color: #ccc;
  }
  &:focus {
    border: 1px solid var(--primary);
  }
`;

const Button = styled.button`
  background: #15dbff;
  border-radius: 8px;
  border: none;
`;

const ButtonSearch = styled(Button)`
  position: absolute;
  width: 128px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  right: 0;
  top: 0;
  border-radius: 0 32px 32px 0;
`;

export { Header, InputSearch, ButtonSearch };
