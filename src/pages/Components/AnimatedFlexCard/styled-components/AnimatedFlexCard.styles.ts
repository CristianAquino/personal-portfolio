import styled from "styled-components";

const Container = styled.div`
  block-size: 60vmin;
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;
  gap: 1rem;
  font-family: "Montserrat", sans-serif;
`;
const Card = styled.label`
  position: relative;
  inline-size: 10vmin;
  cursor: pointer;
  overflow: hidden;
  border-radius: 4vmin;
  display: flex;
  align-items: flex-end;
  transition: 0.6s cubic-bezier(0.28, -0.03, 0, 0.99);
  box-shadow: 0px 10px 30px -5px rgb(0 0 0 / 0.8);
`;
const CardImage = styled.img`
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset: 0;
  object-fit: cover;
  object-position: top left;
`;
const Row = styled.div`
  position: relative;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
`;
const Icon = styled.div`
  --fmin: 1rem;
  --fmed: calc(1vmin + 0.75rem);
  --fmax: 1.25rem;
  font-size: clamp(var(--fmin), var(--fmed), var(--fmax));
  background-color: #223;
  color: #fff;
  border-radius: 50%;
  inline-size: 6.25vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.875vmin;
`;
const Description = styled.div`
  --fmin: 0.75rem;
  --fmed: calc(1vmin + 0.5rem);
  --fmax: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  block-size: 10vmin;
  inline-size: 80vmin;
  opacity: 0;
  translate: 0 3.75vmin;
  transition-delay: 0.3s;
  transition: all 0.3s ease;

  & h4 {
    --fmin: 1rem;
    --fmed: calc(1vmin + 0.75rem);
    --fmax: 1.25rem;
    text-transform: uppercase;
    font-size: clamp(var(--fmin), var(--fmed), var(--fmax));
  }

  & p {
    color: #b0b0ba;
    font-size: clamp(var(--fmin), var(--fmed), var(--fmax));
  }
`;

const Checkbox = styled.input`
  display: none;
  &:checked + ${Card} {
    inline-size: 90vmin;
  }
  &:checked + ${Card} ${Description} {
    opacity: 1;
    translate: 0 0;
  }
`;
export { Card, CardImage, Container, Description, Icon, Row, Checkbox };
