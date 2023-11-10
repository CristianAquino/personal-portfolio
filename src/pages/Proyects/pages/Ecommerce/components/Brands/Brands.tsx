import { Container, Handle, Slider } from "./styled-component";

export type BrandsProps = {};

const Brands = ({}: BrandsProps) => {
  const brands = [
    "Golden",
    "Apple",
    "Samsung",
    "OPPO",
    "Huawei",
    "Microsoft Surface",
    "Infinix",
    "HP Pavilion",
    "Impression of Acqua Di Gio",
    "Royal_Mirage",
    "Fog Scent Xpressio",
    "Al Munakh",
    "Lord - Al-Rehab",
    "L'Oreal Paris",
    "Hemani Tea",
    "Dermive",
    "ROREC White Rice",
    "Fair & Clear",
    "Saaf & Khaas",
    "Bake Parlor Big",
    "Baking Food Items",
    "fauji",
    "Dry Rose",
    "Boho Decor",
    "Flying Wooden",
    "LED Lights",
    "luxury palace",
  ];

  return (
    <Container>
      <Handle>&#8249;</Handle>
      <Slider>
        {brands.map((brand) => (
          <li key={brand}>{brand}</li>
        ))}
      </Slider>
      <Handle>&#8250;</Handle>
    </Container>
  );
};

export default Brands;
