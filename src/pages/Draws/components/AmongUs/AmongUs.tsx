import { Bag, Body, Glass, Legs } from "./styled-components/AmongUs.styles";

export type AmongUsProps = {
  // types...
};

const AmongUs = ({}: AmongUsProps) => {
  return (
    <Body>
      <Glass />
      <Bag />
      <Legs />
    </Body>
  );
};

export default AmongUs;
