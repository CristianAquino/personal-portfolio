"use client";

import {
  BoxImage,
  Categories,
  Container,
  SkillImage,
  Title,
} from "./styles-component";

export type SkillsProps = {
  // types...
};

const Skills = ({}: SkillsProps) => {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Categories>Lenguajes de programacion</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <BoxImage>
          <SkillImage src="/public/icons/javascript.svg" alt="javascript" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/typescript.svg" alt="typescript" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/html5.svg" alt="html5" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/css3.svg" alt="css3" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/python.svg" alt="python" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/sql.svg" alt="sql" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/csharp.svg" alt="csharp" />
        </BoxImage>
      </div>
      <Categories>Frameworks y librerias</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <BoxImage>
          <SkillImage src="/public/icons/react.svg" alt="react" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/redux.svg" alt="redux" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/styled.svg" alt="styled" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/nodejs.svg" alt="nodejs" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/stripe.svg" alt="stripe" />
        </BoxImage>
      </div>
      <Categories>Cloud</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <BoxImage>
          <SkillImage src="/public/icons/aws.svg" alt="amazon web service" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/cloudinary.svg" alt="cloudinary" />
        </BoxImage>
      </div>
      <Categories>Herramientas</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <BoxImage>
          <SkillImage src="/public/icons/figma.svg" alt="figma" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/vite.svg" alt="vite" />
        </BoxImage>
        <BoxImage>
          <SkillImage src="/public/icons/git.svg" alt="git" />
        </BoxImage>
      </div>
    </Container>
  );
};

export default Skills;
