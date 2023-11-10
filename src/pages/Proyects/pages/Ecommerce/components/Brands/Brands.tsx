import { Link, useSearchParams } from "react-router-dom";
import { Container, Handle, Slider } from "./styled-component";

export type BrandsProps = {};

const Brands = ({}: BrandsProps) => {
  const brandVariants = [
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
  const [params] = useSearchParams();
  const brandParam = params.get("brand") || brandVariants[0];
  console.log(brandParam);

  return (
    <Container>
      <Handle>&#8249;</Handle>
      <Slider>
        {brandVariants.map((brand) => (
          <li className={`${brand == brandParam ? "active" : null}`}>
            <Link key={brand} to={`?brand=${brand}`}>
              {brand}
            </Link>
          </li>
        ))}
      </Slider>
      <Handle>&#8250;</Handle>
    </Container>
  );
};

export default Brands;
