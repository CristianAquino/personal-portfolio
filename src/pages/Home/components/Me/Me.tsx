"use client";
import { notifyError, notifySuccess } from "@app/helpers";
import {
  IoCopyOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
import {
  ContactItem,
  ContactList,
  Container,
  Content,
  Description,
  Download,
  Hello,
  Left,
  Name,
  Right,
} from "./component-styles";

export type MeProps = {
  // types...
};

const Me = ({}: MeProps) => {
  function copyEmail(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        notifySuccess("Correo copiado");
      })
      .catch((err) => {
        notifyError("Error al copiar el correo");
        console.log(err);
      });
  }

  return (
    <Container id="me">
      <Content>
        <Left>
          <Hello>Hola soy </Hello>
          <Name>Cristian Aquino</Name>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            qui?
          </Description>
          <ContactList>
            <ContactItem $color={"#6e5494"}>
              <IoLogoGithub />
              <span>Github</span>
            </ContactItem>
            <ContactItem $color={"#0077b5"}>
              <IoLogoLinkedin />
              <span>Linkedin</span>
            </ContactItem>
            <ContactItem
              onClick={() => copyEmail("ycristian10@gmail.com")}
              $color={"#828282"}
            >
              <IoMailOutline />
              <span>ycristian10@gmail.com</span>
              <IoCopyOutline />
            </ContactItem>
          </ContactList>
          <Download to={"/"} aria-label="download CV">
            download CV
          </Download>
        </Left>
        <Right>
          <img
            src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </Right>
      </Content>
    </Container>
  );
};

export default Me;
