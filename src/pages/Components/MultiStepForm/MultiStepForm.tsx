import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Address,
  Preference,
  Progress,
  SignAndSubmit,
  Welcome,
} from "./components";
import { useMultiStepForm } from "./hooks";
import { FormData, TFormData } from "./schemas";
import { Button, Container, Footer, Form } from "./styled-components";
import { useState } from "react";

export type MultiStepFormProps = {
  // types...
};

const MultiStepForm = ({}: MultiStepFormProps) => {
  const [formDatos, setFormDatos] = useState<TFormData>({
    username: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const { currentStepIndex, step, isFirstStep, isLastStep, previous, next } =
    useMultiStepForm([
      <Welcome datos={formDatos} />,
      <Address />,
      <Preference />,
      <SignAndSubmit />,
    ]);

  function onSubmit(e: any) {
    e.preventDefault();
    console.log("first");
    if (!isLastStep) return next();
    alert("ja");
  }
  return (
    <Container>
      <Progress step={currentStepIndex} />
      <Form onSubmit={onSubmit} autoComplete="off">
        {step}
        <Footer>
          {!isFirstStep && (
            <Button type="button" onClick={previous}>
              Previous
            </Button>
          )}
          <Button
            type="submit"
            style={{ background: isLastStep ? "#28a739" : "var(--primary)" }}
          >
            {isLastStep ? "Get Started" : "Next"}
          </Button>
        </Footer>
      </Form>
    </Container>
  );
};
export default MultiStepForm;
