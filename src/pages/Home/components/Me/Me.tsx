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
  ContentDatos,
  ContentImagen,
  ContentLinks,
  Description,
  Download,
  Hello,
  Name,
} from "./component-styles";
import { User } from "../../models";

export type MeProps = {
  // types...
  user: User;
};

const Me = ({ user }: MeProps) => {
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
      <ContentDatos>
        <Hello>Hola soy </Hello>
        <Name>{user?.name}</Name>
        <Description>{user?.description}</Description>
      </ContentDatos>
      <ContentLinks>
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
            onClick={() => copyEmail(`${user?.email.send}`)}
            $color={user?.email.color}
          >
            <IoMailOutline />
            <span>{user?.email.send}</span>
            <IoCopyOutline />
          </ContactItem>
        </ContactList>
        <Download to={user?.curriculum.url} aria-label="download CV">
          download CV
        </Download>
      </ContentLinks>
      <ContentImagen>
        <img src={user?.avatar} alt={user?.name} />
      </ContentImagen>
    </Container>
  );
};

export default Me;
