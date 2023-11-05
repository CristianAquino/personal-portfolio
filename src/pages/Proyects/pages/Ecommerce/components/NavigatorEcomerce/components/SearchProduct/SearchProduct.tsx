import { BsSearch } from "react-icons/bs";
import { ButtonSearch, InputSearch } from "../../style-components";

export type SearchProductProps = {};

const SearchProduct = ({}: SearchProductProps) => {
  return (
    <div
      style={{
        width: "70%",
      }}
    >
      <form
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <InputSearch type="text" placeholder="Enter your search product" />
        <ButtonSearch>
          <BsSearch />
        </ButtonSearch>
      </form>
    </div>
  );
};

export default SearchProduct;
