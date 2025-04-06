"use client";
import { Skill } from "../../models";
import {
  BoxImage,
  Categories,
  Container,
  SkillImage,
  Title,
} from "./styles-component";

export type SkillsProps = {
  // types...
  skills: Skill;
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <Container id="skills">
      <Title>Skills</Title>
      <Categories>Lenguajes de programacion</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {skills?.languages.map((skill) => (
          <BoxImage key={skill.name}>
            <SkillImage src={skill.icon} alt={skill.name} />
          </BoxImage>
        ))}
      </div>
      <Categories>Frameworks y librerias</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {skills?.frameworks.map((skill) => (
          <BoxImage key={skill.name}>
            <SkillImage src={skill.icon} alt={skill.name} />
          </BoxImage>
        ))}
      </div>
      <Categories>Cloud</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {skills?.clouds.map((skill) => (
          <BoxImage key={skill.name}>
            <SkillImage src={skill.icon} alt={skill.name} />
          </BoxImage>
        ))}
      </div>
      <Categories>Herramientas</Categories>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {skills?.tools.map((skill) => (
          <BoxImage key={skill.name}>
            <SkillImage src={skill.icon} alt={skill.name} />
          </BoxImage>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
