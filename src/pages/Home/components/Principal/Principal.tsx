import { useEffect, useState } from "react";
import { Me, Projects } from "..";
import { userPortfolio } from "../../services";
import Skills from "../Skills/Skills";

export type PrincipalProps = {
  // types...
};

const Principal = ({}: PrincipalProps) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    userPortfolio().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <Me user={data?.user} />
      <Projects projects={data?.projects} />
      <Skills skills={data?.skills} />
    </>
  );
};

export default Principal;
