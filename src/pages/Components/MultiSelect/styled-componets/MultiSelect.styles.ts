import styled from "styled-components";

const Container = styled.div`
  position: relative;
  inline-size: 80vmin;
  min-block-size: 5vmin;
  border: 0.05rem solid #777;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  outline: none;
  font-size: clamp(1rem, 0.5rem + 2vmin, 3rem);

  &:focus {
    border-color: #00aaff;
  }
`;

const InputValue = styled.span`
  flex-grow: 1;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ClearBtn = styled.button`
  background: none;
  color: #777;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: clamp(1rem, 0.5rem + 2vmin, 3rem);

  &:focus,
  &:hover {
    color: #00aaff;
  }
`;

const Divider = styled.div`
  background-color: #777;
  inline-size: 0.05rem;
  block-size: 100%;
`;

const Caret = styled.div`
  translate: 0 25%;
  border: clamp(0.25rem, 0.3rem + 2vmin, 0.5rem) solid transparent;
  border-block-start-color: #777;
`;

const Options = styled.ul`
  position: absolute;
  list-style: none;
  display: none;
  max-block-size: 30vmin;
  overflow-y: auto;
  border: 0.05rem solid #777;
  border-radius: 0.25rem;
  inline-size: 100%;
  inset-inline-start: 0;
  inset-block-start: calc(100% + 0.5rem);
  z-index: 10;

  &.show {
    display: block;
  }
`;

const Option = styled.li`
  padding: 0.25rem 0.5rem;
  cursor: pointer;

  &.selected {
    background-color: #66ccff;
  }

  &:hover {
    background-color: #00aaff;
    color: #fff;
  }
`;

const Badge = styled.button`
  display: flex;
  align-items: center;
  border: 0.05rem solid #777;
  border-radius: 0.25rem;
  padding: 0.15rem 0.25rem;
  gap: 0.25rem;
  cursor: pointer;
  background: none;
  outline: none;

  &:hover,
  &:focus {
    background-color: #ffcccc;
    border-color: #ff0000;
    color: #242424;
  }
  &:hover > .remove-btn,
  &:focus > .remove-btn {
    color: #ff0000;
  }

  & > .remove-btn {
    font-size: clamp(1rem, 0.5rem + 2vmin, 3rem);
    color: #777;
  }
`;

export {
  Container,
  InputValue,
  ClearBtn,
  Divider,
  Caret,
  Options,
  Option,
  Badge,
};
