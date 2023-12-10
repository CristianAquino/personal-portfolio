import { Item, List, Text } from "./styled-components";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import datos from "./data/data.json";

export type SocialMediaButtonProps = {
  // types...
};

const SocialMediaButton = ({}: SocialMediaButtonProps) => {
  const icons = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaInstagram />,
    <FaGithub />,
    <FaYoutube />,
  ];
  return (
    <List>
      {datos.map((item) => (
        <Item key={item.id} $i={item.color}>
          {icons[parseInt(item.id) - 1]}
          <Text>{item.text}</Text>
        </Item>
      ))}
    </List>
  );
};

export default SocialMediaButton;
