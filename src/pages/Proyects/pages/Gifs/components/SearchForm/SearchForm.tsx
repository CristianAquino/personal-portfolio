import { ChangeEvent, FormEvent, useState } from "react";

export type SearchFormProps = {
  handleSubmit: ({ keyword }: { keyword: string }) => void;
};

const SearchForm = ({ handleSubmit }: SearchFormProps) => {
  const [keyword, setKeyword] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit({ keyword });
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={keyword} onChange={handleChange} />
    </form>
  );
};

export default SearchForm;
