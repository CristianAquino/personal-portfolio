import {
  Card,
  CardAfterImage,
  CardBeforeImage,
  CardImageContainer,
  CardName,
} from "./styled-components";

import data from "./data/data,.json";

export type CardHover3DProps = {
  // types...
};

const CardHover3D = ({}: CardHover3DProps) => {
  return (
    <>
      {data.map((ele) => (
        <Card key={ele.id} $bgColor={ele.color}>
          <CardImageContainer>
            <CardBeforeImage src={ele.backgroundImage} alt={ele.name} />
          </CardImageContainer>
          <CardAfterImage src={ele.hoverImage} alt={ele.name} />
          <CardName>{ele.name}</CardName>
        </Card>
      ))}
    </>
  );
};

export default CardHover3D;
