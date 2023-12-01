import styled from "styled-components";

const Container = styled.div`
  inline-size: 80vmin;
  border: 1px solid white;
  padding: 2vmax;
`;

const SectionInput = styled.section`
  display: flex;
  flex-direction: column;
`;

const ContentTags = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  /* gap: 0.75rem;
  padding: 0.5rem; */
`;

const Tag = styled.li`
  list-style: none;
  padding: 0.25rem 0.75rem;
  border: 1px solid white;
`;

export { Container, SectionInput, ContentTags, Tag };
