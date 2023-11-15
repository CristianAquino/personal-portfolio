import { Link } from "react-router-dom";

export type CategoryProps = {
  name: string;
  options: string[];
};

const Category = ({ name, options }: CategoryProps) => {
  return (
    <section>
      <h2>{name}</h2>
      <ul>
        {options.map((option) => (
          <li key={option}>
            <Link to={option}>{option}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Category;
