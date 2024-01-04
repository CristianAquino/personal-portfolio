import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  inline-size: 100%;
  block-size: 100%;
`;
const ContentPreference = styled.section`
  display: flex;
  gap: 1rem;
  block-size: 100%;
`;
const LPreference = styled.label`
  inline-size: 33.33%;
  border: 1px solid white;
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & svg {
    inline-size: 120px;
    block-size: 120px;
  }
  & input {
    appearance: none;
  }
  &:has(:checked) {
    border-color: var(--primary);
    color: var(--primary);
  }
  &:has(:hover) {
    border-color: var(--primary);
    color: var(--primary);
  }
`;
export { Container, ContentPreference, LPreference };
