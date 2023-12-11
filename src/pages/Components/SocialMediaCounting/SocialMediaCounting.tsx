import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import datos from "./data/data.json";
import { useCounting } from "./hook";
import { Counting, Item, List, Text } from "./styled-components";

export type SocialMediaCountingProps = {
  // types...
};

const SocialMediaCounting = ({}: SocialMediaCountingProps) => {
  const icons = [
    <FaFacebookSquare />,
    <FaTwitterSquare />,
    <FaInstagramSquare />,
    <FaGithubSquare />,
    <FaYoutubeSquare />,
  ];
  const countf = useCounting({ max: 1500, increment: 10 });
  const countt = useCounting({ max: 2500, increment: 5 });
  const counti = useCounting({ max: 1000, increment: 10 });
  const countg = useCounting({ max: 2500, increment: 5 });
  const county = useCounting({ max: 5000, increment: 10 });

  function counting(param: number) {
    switch (param) {
      case 1:
        return countf;
      case 2:
        return countt;
      case 3:
        return counti;
      case 4:
        return countg;
      case 5:
        return county;
      default:
        return 0;
    }
  }

  return (
    <List>
      {datos.map((item) => (
        <Item key={item.id} $i={item.color}>
          {icons[parseInt(item.id) - 1]}
          <Counting>
            {counting(parseInt(item.id))}
            <span>+</span>
          </Counting>
          <Text>{item.text}</Text>
        </Item>
      ))}
    </List>
  );
};

export default SocialMediaCounting;
