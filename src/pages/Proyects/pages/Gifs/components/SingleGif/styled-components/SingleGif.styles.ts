import styled from "styled-components";

const GifElement = styled.figure<{ $c: number }>`
  width: 100%;
  max-height: 500px;
  ${(props) => props.$c % 4 == 0 && "grid-column: 1/-1"};
  position: relative;
`;

const GifImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const GifTitleImage = styled.figcaption`
  position: absolute;
  bottom: 1.25rem;
  left: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

export { GifElement, GifImage, GifTitleImage };
