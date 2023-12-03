import styled from "styled-components";

const Card = styled.div<{ $bgColor: string }>`
  --bgColor: ${({ $bgColor }) => $bgColor};
  position: relative;
  inline-size: 60vmin;
  block-size: 80vmin;
  font-family: "Montserrat", sans-serif;
`;

const CardImageContainer = styled.div`
  position: absolute;
  inset: 0;
  background-color: #222222;
  border-radius: 4vmin;
`;

const CardBeforeImage = styled.img`
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
  transition: 0.5s;
  border-radius: 4vmin;

  ${Card}:hover & {
    opacity: 0;
  }
`;

const CardAfterImage = styled.img`
  position: absolute;
  z-index: 10;
  opacity: 0;
  inline-size: 100%;
  block-size: 100%;
  transition: 0.5s;
  translate: 0;

  ${Card}:hover & {
    translate: 0 -25%;
    opacity: 1;
  }
`;

const CardName = styled.h2`
  position: absolute;
  z-index: 11;
  inset-block-end: 2vmin;
  inset-inline-start: 70%;
  font-size: 5vmin;
  translate: -50% 0;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.05em;
  background-color: var(--bgColor);
  inline-size: 80%;
  padding: 1vmin 1.5vmin;
  border-radius: 1.5vmin;
  text-align: center;
  text-transform: capitalize;
  transition: inset-block-end 0.5s;
  opacity: 0;

  ${Card}:hover & {
    inset-block-end: 4vmin;
    opacity: 1;
  }
`;

export { Card, CardBeforeImage, CardAfterImage, CardImageContainer, CardName };
