"use client";
import { useEffect } from "react";
import {
  IoDocumentTextSharp,
  IoHammerSharp,
  IoHomeSharp,
} from "react-icons/io5";
import { Container, NavItem } from "./styled-components";
import { useParams } from "react-router-dom";

export type NavigatorProps = {
  // types...
};

const Navigator = ({}: NavigatorProps) => {
  const params = useParams();
  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <Container>
      <NavItem>
        <a href={"#me"}>
          <span>
            <IoHomeSharp />
          </span>
          <span>Home</span>
        </a>
      </NavItem>
      <NavItem>
        <a href={"#projects"}>
          <span>
            <IoDocumentTextSharp />
          </span>
          <span>Projects</span>
        </a>
      </NavItem>
      <NavItem>
        <a href={"#skills"}>
          <span>
            <IoHammerSharp />
          </span>
          <span>Skills</span>
        </a>
      </NavItem>
    </Container>
  );
};

export default Navigator;
