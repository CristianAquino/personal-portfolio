import {
  AnimatedFlexCard,
  ButtonHover,
  CardHover3D,
  CardHoverFlip,
  CardInvertBorder,
  CircleText,
  CurveOutside,
  FadeoutEffect,
  ImageMask,
  MenuHoverText,
  MultiSelect,
  ScrollAnimation,
  Skeleton,
  Slide3D,
  SocialMediaButton,
  SocialMediaCounting,
  TagInput,
} from "..";

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
      {/* <TagInput /> */}
      {/* <MultiSelect /> */}
      {/* <CardHover3D /> */}
      {/* <FadeoutEffect /> */}
      {/* <AnimatedFlexCard /> */}
      {/* <CurveOutside /> */}
      {/* <Slide3D /> */}
      {/* <CardHoverFlip /> */}
      {/* <Skeleton /> */}
      {/* <ImageMask /> */}
      {/* <CardInvertBorder /> */}
      {/* <ScrollAnimation /> */}
      {/* <ButtonHover /> */}
      {/* <MenuHoverText /> */}
      {/* <CircleText /> */}
      {/* <SocialMediaButton /> */}
      <SocialMediaCounting />
    </div>
  );
};

export default Home;
