import { SingleGif } from "..";
import { Gif } from "../../models";

export type ListOfGifsProps = {
  gifs: Gif[];
};

const ListOfGifs = ({ gifs }: ListOfGifsProps) => {
  return (
    <div style={{ minHeight: "100vh" }}>
      {gifs.map((gif) => (
        <SingleGif key={gif.id} gif={gif} />
      ))}
    </div>
  );
};

export default ListOfGifs;
