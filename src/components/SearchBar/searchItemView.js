import { Link } from "react-router-dom";
import "./index.css";

const SearchItemView = (props) => {
  const { filteredProductDetails } = props;

  const { _id, brandName, productName, productImageUrls, productPrice } =
    filteredProductDetails;

  return (
    <Link to={`/product/${brandName}-${productName}?product_id=${_id}`}>
      <div className="search-item-container">
        <img
          className="search-item-container-image"
          src={productImageUrls[0]["productImageUrl"]}
          alt={productName}
        />
        <h1 className="search-item-container-heading">
          {brandName} {productName}
        </h1>
        <p className="search-item-container-price">{productPrice}</p>
      </div>
    </Link>
  );
};

export default SearchItemView;
