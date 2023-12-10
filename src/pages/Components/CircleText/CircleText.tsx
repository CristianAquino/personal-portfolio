import { Container, Image, Text } from "./styled-components";

export type CircleTextProps = {
  // types...
};

const CircleText = ({}: CircleTextProps) => {
  const letter = "Nagatoro - Creative UX/UI Designer -".split("");
  return (
    <Container>
      <Image src="https://i.postimg.cc/3wJGb8WT/postura.jpg" />
      <Text>
        {letter.map((char, i) => (
          <span style={{ transform: `rotate(${i * 10}deg)` }}>{char}</span>
        ))}
      </Text>
    </Container>
  );
};

export default CircleText;
