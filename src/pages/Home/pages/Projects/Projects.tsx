"use client";
import { Helmet } from "react-helmet";
import data from "../../../../data/data.json";
import {
  BoxImage,
  Container,
  Content,
  InfoDescription,
  InfoList,
  InfoName,
  ItemInfoList,
  ProjectImage,
  ProjectInfo,
  Title,
} from "./styled-components";
export type ProjectsProps = {
  // types...
};

const Projects = ({}: ProjectsProps) => {
  return (
    <Container>
      <Helmet>
        <title>All projects | Portfolio</title>
        <meta
          name="description"
          content={`list of projects created by CRdev`}
        />
      </Helmet>
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
    </Container>
  );
};

export default Projects;
