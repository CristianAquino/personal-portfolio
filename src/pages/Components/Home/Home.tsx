import { TagInput } from "..";

export type HomeProps = {
  // types...
};

const Home = ({}: HomeProps) => {
  return (
    <div
      style={{
        blockSize: "100vh",
        inlineSize: "100vw",
        display: "grid",
        placeContent: "center",
      }}
    >
      <TagInput />
    </div>
  );
};

export default Home;
