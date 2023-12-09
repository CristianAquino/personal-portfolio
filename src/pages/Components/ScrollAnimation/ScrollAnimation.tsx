import { useEffect, useRef } from "react";
import { Container, Item, List } from "./styled-components";

export type ScrollAnimationProps = {
  // types...
};

const ScrollAnimation = ({}: ScrollAnimationProps) => {
  const data = [
    "1Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "Explicabo",
    "saepe",
  ];
  const refList = useRef<HTMLUListElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let list = refList.current;
    let cont = refContainer.current;
    const cl = list?.cloneNode(true);
    if (cl) cont?.appendChild(cl);
  }, [data]);

  return (
    <Container ref={refContainer}>
      <List ref={refList}>
        {data.map((ele) => (
          <Item key={ele}>{ele}</Item>
        ))}
      </List>
    </Container>
  );
};

export default ScrollAnimation;
