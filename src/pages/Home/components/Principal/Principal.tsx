import { useEffect, useState } from "react";
import { Me, Projects } from "..";
import { userPortfolio } from "../../services";
import Skills from "../Skills/Skills";

import LogoSvg from "@assets/icons/home.svg?component";

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
      <svg className="text-blue-500 hover:text-green-500 size-50">
        <use xlinkHref={`/sprite.svg#home`} />
      </svg>
      <LogoSvg className="w-50 h-50 text-red-500" />
      <Me user={data?.user} />
      <Projects projects={data?.projects} />
      <Skills skills={data?.skills} />
    </>
  );
};

export default Principal;
