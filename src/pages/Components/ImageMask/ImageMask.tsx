import { Background, Container, Thumbnail } from "./styled-components";

export type ImageMaskProps = {
  // types...
};

const ImageMask = ({}: ImageMaskProps) => {
  return (
    <Container>
      <Thumbnail src="https://i.postimg.cc/L6cWGkqJ/splash.jpg" />
      <Background src="https://i.postimg.cc/Z56Qm93V/bg.jpg" />
    </Container>
  );
};

export default ImageMask;
