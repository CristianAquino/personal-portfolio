import { useEffect, useRef, useState } from "react";

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
  const brandsRef = useRef<HTMLUListElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    const sectionBrands = brandsRef.current;
    const listBrands = sectionBrands?.querySelectorAll("li");
    const val = currentSlide + 1;
    setCurrentSlide(val);
    if (val >= listBrands?.length) {
      setCurrentSlide(0);
    }
    console.log("next-" + val);
    sectionBrands.style.transform = `translateX(-${
      val * sectionBrands?.offsetWidth
    }px)`;
  }

  function prevSlide() {
    const sectionBrands = brandsRef.current;
    const listBrands = sectionBrands?.querySelectorAll("li");
    const val = currentSlide - 1;
    setCurrentSlide(val);
    if (val < 0) {
      setCurrentSlide(listBrands.length / 3 - 1);
    }
    console.log("prev-" + val);
    sectionBrands.style.transform = `translateX(-${
      val * sectionBrands?.offsetWidth
    }px)`;
  }

  return (
    <section
      style={{
        textWrap: "nowrap",
        overflow: "hidden",
        alignSelf: "center",
        position: "relative",
      }}
    >
      <ul
        style={{ transition: "transform 0.5s ease-in-out", listStyle: "none" }}
        ref={brandsRef}
      >
        {brands.map((brand) => (
          <li
            key={brand}
            style={{
              fontSize: "clamp(1rem, 1rem + 0.7vw, 1.5rem)",
              margin: "0 0.5rem",
              background: "#ccc",
              padding: "0.25rem 0.5rem",
              display: "inline",
            }}
          >
            {brand}
          </li>
        ))}
      </ul>
      {currentSlide > 0 && (
        <button
          style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
          onClick={prevSlide}
        >
          left
        </button>
      )}
      <button
        style={{ position: "absolute", right: 0, top: 0, bottom: 0 }}
        onClick={nextSlide}
      >
        right
      </button>
    </section>
  );
};

export default Brands;
