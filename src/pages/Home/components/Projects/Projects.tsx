"use client";

import { PUBLIC_ROUTE } from "@app/routes";
import data from "../../../../data/data.json";
import {
  BoxImage,
  Container,
  Content,
  InfoDescription,
  InfoList,
  InfoName,
  ItemInfoList,
  LinkMore,
  ProjectImage,
  ProjectInfo,
  Title,
} from "./styled-components";
export type ProjectsProps = {
  // types...
};

const Projects = ({}: ProjectsProps) => {
  return (
    <Container id="projects">
      <Title>Projects</Title>
      {data.projects.map((project) => (
        <Content key={project.name}>
          <BoxImage>
            <ProjectImage
              src={project.image.thumbs}
              alt={project.name}
              title={project.name}
            />
          </BoxImage>
          <ProjectInfo>
            <InfoName>{project.name}</InfoName>
            <InfoDescription>{project.description}</InfoDescription>
            <InfoList>
              {project.tools.map((tech) => (
                <ItemInfoList title={tech.name}>
                  <img src={tech.icon} />
                </ItemInfoList>
              ))}
            </InfoList>
          </ProjectInfo>
        </Content>
      ))}
      <LinkMore to={PUBLIC_ROUTE.PROJECTS} aria-label="More projects">
        More projects +
      </LinkMore>
    </Container>
  );
};

export default Projects;
