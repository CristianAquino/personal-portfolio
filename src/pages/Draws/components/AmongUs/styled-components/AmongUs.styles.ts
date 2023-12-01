import styled from "styled-components";

const Body = styled.div`
  /* se tiene como referencia a 1px -- 0.4vmin */
  /* colors */
  --body: #840931;
  --border: 4vmin solid #000;
  --shadow: #ea1616;
  /* vars */
  --bgBody: var(--body, #840931);
  --brdBody: var(--border, 4vmin solid #000);
  --bgShadow: var(--shadow, #ea1616);

  inline-size: 56vmin;
  block-size: 80vmin;
  position: absolute;
  margin: auto;
  inset: 0;
  background-color: var(--bgBody);
  border: var(--brdBody);
  border-block-end: none;
  border-radius: 24vmin 32vmin 0 0;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    inline-size: 92%;
    block-size: 85%;
    background-color: var(--bgShadow);
    inset-block-start: 1vmin;
    inset-inline-start: 2.4vmin;
    border-radius: 58% 70% 28% 42% / 28% 56% 88% 89%;
  }
  &::before {
    content: "";
    block-size: 10vmin;
    inline-size: 84vmin;
    background-color: rgb(153 130 0 / 0.2);
    position: absolute;
    inset-block-end: -22vmin;
    inset-inline-end: -16vmin;
    border-radius: 50%;
    z-index: 0;
  }
`;

const Legs = styled.div`
  block-size: 20vmin;
  inline-size: 24vmin;
  background-color: inherit;
  position: absolute;
  inset-block-end: -20vmin;
  inset-inline-start: -3.9vmin;
  border: var(--brdBody);
  border-block-start: none;
  border-radius: 0 0 8.8vmin 8.8vmin;

  &::before {
    content: "";
    block-size: 18vmin;
    inline-size: 24vmin;
    background-color: inherit;
    position: absolute;
    inset-inline-end: -35.9vmin;
    border: var(--brdBody);
    border-block-start: none;
    border-radius: 0 0 8.8vmin 8.8vmin;
  }
  &::after {
    content: "";
    block-size: 4vmin;
    inline-size: 22vmin;
    background-color: #000;
    position: absolute;
    inset-block-start: -4vmin;
    inset-inline-start: 16.2vmin;
    border-radius: 0 0 4vmin 0;
  }
`;

const Bag = styled.div`
  block-size: 48vmin;
  inline-size: 14vmin;
  border: var(--brdBody);
  background-color: var(--bgShadow);
  position: absolute;
  inset-inline-start: -18vmin;
  inset-block-start: 26vmin;
  border-inline-end: none;
  border-radius: 8vmin 0 0 8vmin;

  &::before {
    content: "";
    position: absolute;
    block-size: 31.2vmin;
    inline-size: 10.4vmin;
    background-color: var(--bgBody);
    inset-block-end: -0.2vmin;
    inset-inline-start: -0.4vmin;
    border-radius: 4.8vmin 0 0 3.2vmin;
  }
`;

const Glass = styled.div`
  --glass: #225381;
  block-size: 30vmin;
  inline-size: 44vmin;
  background-color: var(--glass);
  z-index: 2;
  position: absolute;
  inset-block-start: 12vmin;
  inset-inline-start: 16vmin;
  border-radius: 10vmin 20vmin 12vmin 12vmin;
  border: var(--brdBody);

  &::before {
    --shadowGalss: #71d4ec;
    content: "";
    position: absolute;
    block-size: 72%;
    inline-size: 85%;
    background-color: var(--shadowGalss);
    border-radius: 0 11.2vmin 1.2vmin 12vmin;
    inset-inline-end: 0;
    inset-block-start: 0;
  }
  &::after {
    --glow: #f7f7f7;
    content: "";
    position: absolute;
    inline-size: 45%;
    block-size: 22%;
    background-color: var(--glow);
    inset-inline-start: 15.6vmin;
    inset-block-start: 2vmin;
    border-radius: 4vmin;
    rotate: 6deg;
  }
`;

export { Body, Legs, Bag, Glass };
