import { memo } from "react";
import { Gif } from "../../models";
import { GifElement } from "./styled-components";

export type SingleGifProps = {
  gif: Gif;
  index: number;
};
// tomar en cuenta el title en img for seo
const SingleGif = ({ gif, index }: SingleGifProps) => {
  return (
    <GifElement $c={index}>
      <img src={gif.url} alt={gif.title} title={gif.title} />
      <figcaption>{gif.title}</figcaption>
    </GifElement>
  );
};

export default memo(SingleGif);
