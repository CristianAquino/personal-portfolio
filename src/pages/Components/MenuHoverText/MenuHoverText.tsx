import {
  IoCameraOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import datos from "./data/data.json";
import { Item, List, Text } from "./styled-components";

export type MenuHoverTextProps = {
  // types...
};

const MenuHoverText = ({}: MenuHoverTextProps) => {
  const icons = [
    <IoHomeOutline />,
    <IoChatbubbleOutline />,
    <IoHeartOutline />,
    <IoVideocamOutline />,
    <IoCameraOutline />,
  ];

  return (
    <List>
      {datos.map((item) => (
        <Item key={item.id} $i={item.color1} $j={item.color2}>
          {icons[parseInt(item.id) - 1]}
          <Text>{item.text}</Text>
        </Item>
      ))}
    </List>
  );
};

export default MenuHoverText;
