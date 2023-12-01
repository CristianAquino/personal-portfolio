import { useEffect, useState } from "react";
import { Container, Tag } from "./styled-components";

export type TagInputProps = {
  // types...
};

const TagInput = ({}: TagInputProps) => {
  const [list, setList] = useState(["html", "css"]);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.length == 1) return;
    if (value.includes(",")) {
      const newList = value.trim().replace(/\s+/g, " ").split(",");
      newList.forEach((element) => {
        if (element) {
          setList([...list, element]);
          setValue("");
        }
      });
    }
  };

  const handleClear = () => {
    setList([]);
  };

  const handleDelete = (item: string) => {
    setList(list.filter((element) => element !== item));
  };

  useEffect(() => {
    handleAdd();
  }, [value]);

  return (
    <Container>
      <section>
        <fieldset>
          <legend> Participants </legend>
          {list.map((item) => (
            <Tag key={item}>
              {item} <button onClick={() => handleDelete(item)}>X</button>
            </Tag>
          ))}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </fieldset>
      </section>
      <section>
        <p>Separate participants with commas</p>
        <p>
          Participants added: <span>{list.length}</span>
        </p>
        <button onClick={handleClear}>Remove All</button>
      </section>
    </Container>
  );
};

export default TagInput;
