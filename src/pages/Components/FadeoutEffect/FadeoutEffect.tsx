import {
  Card,
  CardData,
  CardDataDescription,
  CardDataTitle,
} from "./styled-components";

export type FadeoutEffectProps = {
  // types...
};

const FadeoutEffect = ({}: FadeoutEffectProps) => {
  return (
    <Card>
      <CardData>
        <CardDataTitle>jajs</CardDataTitle>
        <CardDataDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          voluptates dolorum quasi dolorem eveniet consectetur delectus
          laboriosam pariatur, distinctio non cumque natus id nam magni sequi
          modi expedita sapiente voluptatum itaque animi? Praesentium tempora
          modi aperiam culpa amet sint dicta consectetur doloribus, a, ex
          repellendus aliquam. Perferendis recusandae voluptate magnam.
        </CardDataDescription>
      </CardData>
      <img src="https://i.postimg.cc/28hn19gP/Gosick-Victorique.jpg" alt="" />
    </Card>
  );
};

export default FadeoutEffect;
