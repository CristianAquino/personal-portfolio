import { Me, Projects } from "..";
import Skills from "../Skills/Skills";

export type PrincipalProps = {
  // types...
};

const Principal = ({}: PrincipalProps) => {
  return (
    <>
      <Me />
      <Projects />
      <Skills />
    </>
  );
};

export default Principal;
