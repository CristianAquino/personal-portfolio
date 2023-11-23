import styled from "styled-components";

const GifsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(300px, 500px);
`;

export { GifsContainer };
