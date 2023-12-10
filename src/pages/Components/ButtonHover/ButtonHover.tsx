import { Button, Container } from "./styled-components";

export type ButtonHoverProps = {
  // types...
};

const ButtonHover = ({}: ButtonHoverProps) => {
  return (
    <Container>
      <Button href="#">Button</Button>
      <Button href="#">Button</Button>
      <Button href="#">Button</Button>
      <Button href="#">Button</Button>
      <Button href="#">Button</Button>
      <Button href="#">Button</Button>
    </Container>
  );
};

export default ButtonHover;
