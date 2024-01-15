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
  Description,
  Download,
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
      <div>
        <Left>
          <div>
            <span style={{ fontSize: "2rem" }}>Hola soy </span>
            <Name>Cristian Aquino</Name>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              qui?
            </Description>
          </div>
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
        <Right></Right>
      </div>
    </Container>
  );
};

export default Me;
