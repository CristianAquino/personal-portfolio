import { useForm } from "react-hook-form";
import { Container, FormContainer, Left, Righ } from "./styled-components";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, TFormData } from "../../schemas";

export type WelcomeProps = {
  datos: TFormData;
};

const Welcome = ({}: WelcomeProps) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      FormData.pick({ username: true, email: true, phone: true })
    ),
  });
  return (
    <Container>
      <Left>
        <h1>welcome</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          nostrum?
        </p>
      </Left>
      <Righ>
        <FormContainer>
          <p>name</p>
          <input type="text" {...register("username")} autoFocus />
          {errors.username && <span>{errors.username.message as string}</span>}
        </FormContainer>
        <FormContainer>
          <p>email</p>
          <input type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message as string}</span>}
        </FormContainer>
        <FormContainer>
          <p>phone</p>
          <input type="text" {...register("phone")} />
          {errors.phone && <span>{errors.phone.message as string}</span>}
        </FormContainer>
      </Righ>
    </Container>
  );
};

export default Welcome;
