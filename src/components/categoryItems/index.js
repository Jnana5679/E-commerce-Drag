import { Link } from "react-router-dom";
import "./index.css";

export const CategoryItems = (props) => {
  const { categoryItem } = props;
  const { name, thumbnailUrl, category } = categoryItem;

  return (
    <li>
      <Link to={`/category/${category}?category_name=${name}`}>
        <button type="button" className="category-button">
          <img
            src={thumbnailUrl}
            alt={name}
            className="category-button-image"
          />
          {name}
        </button>
      </Link>
    </li>
  );
};
