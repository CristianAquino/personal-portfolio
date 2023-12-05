import {
  Box1,
  Box2,
  Button,
  Card,
  Cicle,
  Container,
  Data,
  Item,
  Name,
} from "./styled-components";

export type CurveOutsideProps = {
  // types...
};

const CurveOutside = ({}: CurveOutsideProps) => {
  return (
    <Card>
      <Box1></Box1>
      <Box2>
        <Data>
          <Name>
            Lorem, ipsum.
            <br />
            <span>Lorem, ipsum.</span>
          </Name>
          <Container>
            <Item>
              Posts<span>62</span>
            </Item>
            <Item>
              Followers<span>120</span>
            </Item>
            <Item>
              Following<span>47</span>
            </Item>
          </Container>
          <Button>follow</Button>
        </Data>
      </Box2>
      <Cicle>
        <img src="https://i.postimg.cc/sgH1whPj/tohru1.jpg" />
      </Cicle>
    </Card>
    // https://www.youtube.com/watch?v=vhkhyPzJQa8
    // https://www.youtube.com/watch?v=6vtg3Abf6PE
    // https://www.youtube.com/watch?v=y1-QXNf4728
  );
};

export default CurveOutside;
