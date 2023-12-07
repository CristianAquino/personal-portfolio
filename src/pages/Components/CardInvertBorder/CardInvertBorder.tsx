import { BoxImg, Card, Content, Price } from "./styled-components";

export type CardInvertBorderProps = {
  // types...
};

const CardInvertBorder = ({}: CardInvertBorderProps) => {
  return (
    <Card>
      <BoxImg
        $url={
          "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg"
        }
      ></BoxImg>
      <Content>
        <Price>
          <a href="#">$1,000,000</a>
        </Price>
        <ul style={{ color: "#fff" }}>
          <li>Somewhere</li>
          <li>1200sqm</li>
          <li>House</li>
        </ul>
      </Content>
    </Card>
  );
};

export default CardInvertBorder;
