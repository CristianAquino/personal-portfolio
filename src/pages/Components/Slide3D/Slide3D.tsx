import { useEffect, useState } from "react";
import { getPicsumImage } from "@services/picsum.service";
import { Image } from "@models/picsum.model";
import { Container, Img, Slide, Title } from "./styled-components";

export type Slide3DProps = {
  // types...
};

const Slide3D = ({}: Slide3DProps) => {
  const [imgs, setImg] = useState<Image[]>([]);
  useEffect(() => {
    async function gifs() {
      const data = await getPicsumImage();
      setImg(data);
    }
    gifs();
  }, []);

  if (imgs.length <= 0) return <p>loading...</p>;

  return (
    <Container>
      {imgs.map((img, index) => (
        <Slide key={img.id} $i={index}>
          <Title>
            {img.id}
            <span>{img.author}</span>
          </Title>
          <Img src={img.image} />
        </Slide>
      ))}
    </Container>
  );
};

export default Slide3D;
