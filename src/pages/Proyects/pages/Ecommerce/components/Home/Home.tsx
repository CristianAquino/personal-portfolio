import { Panel, Products } from "..";

export type HomeProps = {};

const Home = ({}: HomeProps) => {
  return (
    <>
      <Panel />
      <Products />
    </>
  );
};

export default Home;
