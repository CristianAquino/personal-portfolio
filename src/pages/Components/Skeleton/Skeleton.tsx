import {
  Card,
  Content,
  Left,
  Right,
  Thumbnail,
  Title,
} from "./styled-component";

export type SkeletonProps = {
  // types...
};

const Skeleton = ({}: SkeletonProps) => {
  return (
    <Card>
      <Left>
        <Thumbnail />
      </Left>
      <Right>
        <Title />
        <Content />
      </Right>
    </Card>
  );
};

export default Skeleton;
