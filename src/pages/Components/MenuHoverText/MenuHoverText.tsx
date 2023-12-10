import { useEffect, useState } from "react";
import { Icon, Item, List, Text } from "./styled-components";
import {
  IoCameraOutline,
  IoChatbubbleOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import datos from "./data/data.json";

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
  const [data, setData] = useState([]);
  useEffect(() => {
    const nuevo = datos.map((ele) => {
      return { ...ele, icon: icons[parseInt(ele.id) - 1] };
    });
    setData(nuevo);
  }, []);

  if (!data) return <p>Loading social...</p>;

  return (
    <List>
      {data.map((item) => (
        <Item key={item.id} $i={item.color1} $j={item.color2}>
          <Icon>{item.icon}</Icon>
          <Text>{item.text}</Text>
        </Item>
      ))}
    </List>
  );
};

export default MenuHoverText;
