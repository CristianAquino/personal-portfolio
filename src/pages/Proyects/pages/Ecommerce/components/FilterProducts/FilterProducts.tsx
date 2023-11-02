import { TbBrandCashapp, TbCategory } from "react-icons/tb";
import {
  Filter,
  ItemFilter,
  ListFilter,
  TitleFilter,
} from "./styled-components";
import { useState } from "react";
export type FilterProductsProps = {};

const FilterProducts = ({}: FilterProductsProps) => {
  const [category, setCategory] = useState([
    {
      name: "All",
      status: true,
    },
    {
      name: "Clothes",
      status: false,
    },
    {
      name: "Shoes",
      status: false,
    },
  ]);
  const [price, setPrice] = useState([
    {
      name: "$0 - $50",
      status: true,
    },
    {
      name: "$50 - $100",
      status: false,
    },
    {
      name: "$100 - $150",
      status: false,
    },
  ]);
  const changeCategory = (name: string) => {
    const nuevo = category.map((ele) => {
      if (ele.name === name) {
        return { ...ele, status: true };
      }
      return { ...ele, status: false };
    });
    setCategory(nuevo);
  };
  const changePrice = (name: string) => {
    const nuevo = price.map((ele) => {
      if (ele.name === name) {
        return { ...ele, status: true };
      }
      return { ...ele, status: false };
    });
    setPrice(nuevo);
  };
  return (
    <Filter>
      <section>
        <TitleFilter>
          <TbCategory />
          categories
        </TitleFilter>
        <ListFilter>
          {category.map((item, index) => (
            <ItemFilter
              key={index}
              className={`${item.status ? "active" : ""}`}
            >
              <label onClick={() => changeCategory(item.name)}>
                <input type="radio" name="category" hidden />
                {item.name}
              </label>
            </ItemFilter>
          ))}
        </ListFilter>
      </section>
      <section>
        <TitleFilter>
          <TbBrandCashapp />
          Price
        </TitleFilter>
        <ListFilter>
          {price.map((item, index) => (
            <ItemFilter
              key={index}
              className={`${item.status ? "active" : ""}`}
            >
              <label onClick={() => changePrice(item.name)}>
                <input type="radio" name="category" hidden />
                {item.name}
              </label>
            </ItemFilter>
          ))}
        </ListFilter>
      </section>
    </Filter>
  );
};

export default FilterProducts;
