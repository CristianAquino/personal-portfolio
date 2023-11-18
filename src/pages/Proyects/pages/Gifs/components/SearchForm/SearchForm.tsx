import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export type SearchFormProps = {};

const SearchForm = ({}: SearchFormProps) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/proyects/gifs/${keyword}`);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={keyword} onChange={handleChange} />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
