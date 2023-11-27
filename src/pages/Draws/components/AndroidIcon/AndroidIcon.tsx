import { Arm, Body, Container, Eye, Head } from "./styled-components";

export type AndroidIconProps = {};

const AndroidIcon = ({}: AndroidIconProps) => {
  return (
    <Container>
      <Head>
        <Eye className="left" />
        <Eye className="right" />
      </Head>
      <Body>
        <Arm className="left" />
        <Arm className="right" />
      </Body>
    </Container>
  );
};

export default AndroidIcon;
