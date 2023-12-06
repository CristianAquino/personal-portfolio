import {
  BoxImg,
  BoxTxt,
  Card,
  Container,
  Content,
  Img,
} from "./styled-components";
import data from "./data/data.json";

export type CardHoverFlipProps = {
  // types...
};

const CardHoverFlip = ({}: CardHoverFlipProps) => {
  return (
    <Container>
      {data.map((item) => (
        <Card $i={`${item.primary}`}>
          <Content>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href="#">Read more</a>
          </Content>
          <BoxImg>
            <Img src={item.thumbnail} alt={item.title} />
          </BoxImg>
          <BoxTxt>
            <h2>{item.title}</h2>
          </BoxTxt>
        </Card>
      ))}
    </Container>
  );
};

export default CardHoverFlip;
