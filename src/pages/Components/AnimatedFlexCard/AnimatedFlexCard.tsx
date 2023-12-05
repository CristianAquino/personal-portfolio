import { Fragment, useId } from "react";
import {
  Card,
  CardImage,
  Checkbox,
  Container,
  Description,
  Icon,
  Row,
} from "./styled-components";
import data from "./data/data.json";

export type AnimatedFlexCardProps = {
  // types...
};

const AnimatedFlexCard = ({}: AnimatedFlexCardProps) => {
  const inputId = useId();
  return (
    <Container>
      {data.map((item) => (
        <Fragment key={item.id}>
          <Checkbox type="radio" name="test" id={`${inputId}${item.id}`} />
          <Card htmlFor={`${inputId}${item.id}`}>
            <CardImage src={item.image} />
            <Row>
              <Icon>{item.id}</Icon>
              <Description>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </Description>
            </Row>
          </Card>
        </Fragment>
      ))}
    </Container>
  );
};

export default AnimatedFlexCard;
