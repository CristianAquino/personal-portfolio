import styled from "styled-components";

const FormSearch = styled.form`
  text-align: center;
  --height: 3rem;
  --fSize: 1.5rem;

  & > input[type="text"] {
    width: 30%;
    height: var(--height);
    font-size: var(--fSize);
    padding-left: 1rem;
    border-color: transparent;
    border-bottom: 2px solid var(--primary);
    background-color: transparent;
    outline: none;
    caret-color: var(--primary);
  }
  & > input[type="submit"] {
    font-size: var(--fSize);
    margin-left: 1rem;
    padding: 0 2rem;
    height: var(--height);
    background-color: var(--primary);
    border-radius: 0.5rem;
    border: none;
  }
`;

export { FormSearch };
