import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyTrending, ListOfGifs } from "..";
import { useGifs } from "../../hooks";

export type HomeProps = {};

const Home = ({}: HomeProps) => {
  const [keyword, setKeyword] = useState("");
  const { gifs } = useGifs();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/proyects/gifs/${keyword}`);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} />
      </form>
      <h3>Last Search</h3>
      <ListOfGifs gifs={gifs} />
      <LazyTrending />
    </div>
  );
};

export default Home;
