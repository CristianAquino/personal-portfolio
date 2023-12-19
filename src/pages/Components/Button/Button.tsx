import { SlControlPlay } from "react-icons/sl";
import { Boton, Container } from "./styled-components";
import { ReactNode } from "react";

export type ButtonProps = {
  // types...
};
export type ReuProps = {
  text: string;
  icon: ReactNode;
  location: string;
};

const Button = ({}: ButtonProps) => {
  return (
    <>
      <Container>
        <input type="checkbox" />
        <SlControlPlay />
      </Container>
      <Reu icon={<SlControlPlay />} text="ja" location="right" />
    </>
  );
};

const Reu = ({ icon = null, text, location }: Partial<ReuProps>) => {
  return (
    <Boton location={location}>
      {icon && <span>{icon}</span>}
      {text}
    </Boton>
  );
};

export default Button;
