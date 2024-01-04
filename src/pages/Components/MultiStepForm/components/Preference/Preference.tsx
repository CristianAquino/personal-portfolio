import { BsEnvelope, BsMailbox, BsTelephone } from "react-icons/bs";
import { Container, ContentPreference, LPreference } from "./styled-components";

export type PreferenceProps = {};

const Preference = ({}: PreferenceProps) => {
  return (
    <Container>
      <h3>communicacion preferences</h3>
      <ContentPreference>
        <LPreference title="email">
          <BsEnvelope />
          <input type="radio" name="preference" value="email" />
          <span>email</span>
        </LPreference>
        <LPreference title="phone">
          <BsTelephone />
          <input type="radio" name="preference" value="phone" />
          <span>phone</span>
        </LPreference>
        <LPreference title="mail">
          <BsMailbox />
          <input type="radio" name="preference" value="mail" />
          <span>mail</span>
        </LPreference>
      </ContentPreference>
      <label>
        <input type="checkbox" name="permisse" />{" "}
        <span>would you like to recived updates and perks?</span>
      </label>
    </Container>
  );
};

export default Preference;
