import { Container, FormContainer } from "./styled-components";

export type AddressProps = {};

const Address = ({}: AddressProps) => {
  return (
    <Container>
      {/* <FormContainer>
        <p>address</p>
        <input type="text" name="address" autoFocus {...a} />
        {errors.address && <span>{errors.address.message}</span>}
      </FormContainer>
      <FormContainer>
        <p>city</p>
        <input type="text" name="city" {...b} />
        {errors.city && <span>{errors.city.message}</span>}
      </FormContainer>
      <FormContainer>
        <p>state</p>
        <input type="text" name="state" {...c} />
        {errors.state && <span>{errors.state.message}</span>}
      </FormContainer>
      <FormContainer>
        <p>zip</p>
        <input type="text" name="zip" {...d} />
        {errors.zip && <span>{errors.zip.message}</span>}
      </FormContainer> */}
    </Container>
  );
};

export default Address;
