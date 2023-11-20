import { memo } from "react";
import { Gif } from "../../models";

export type SingleGifProps = {
  gif: Gif;
};
// tomar en cuenta el title en img for seo
const SingleGif = ({ gif }: SingleGifProps) => {
  return (
    <figure>
      <img src={gif.url} alt={gif.title} title={gif.title} />
      <figcaption>{gif.title}</figcaption>
    </figure>
  );
};

export default memo(SingleGif);
