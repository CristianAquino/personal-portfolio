import {
  FaCircleUser,
  FaFileSignature,
  FaIdCard,
  FaLocationDot,
} from "react-icons/fa6";
import { Container, IProgress } from "./styled-components";

export type ProgressProps = {
  step: number;
};

const Progress = ({ step }: ProgressProps) => {
  const iconProgress = [
    {
      title: "welcome",
      icon: <FaCircleUser />,
    },
    {
      title: "address",
      icon: <FaLocationDot />,
    },
    {
      title: "preference",
      icon: <FaIdCard />,
    },
    {
      title: "sign and submit",
      icon: <FaFileSignature />,
    },
  ];
  return (
    <Container>
      {iconProgress.map((data, index) => (
        <IProgress key={data.title} className={index == step ? "active" : ""}>
          <span>{data.icon}</span>
          <h6>{data.title}</h6>
        </IProgress>
      ))}
    </Container>
  );
};

export default Progress;
