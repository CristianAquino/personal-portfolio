import { memo } from "react";
import { Gif } from "../../models";

export type SingleGifProps = {
  gif: Gif;
};

const SingleGif = ({ gif }: SingleGifProps) => {
  return (
    <div>
      <figure>
        <img src={gif.url} alt={gif.title} />
        <figcaption>{gif.title}</figcaption>
      </figure>
    </div>
  );
};

export default memo(SingleGif);
