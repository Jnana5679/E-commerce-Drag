import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AddQuantity from "../addButton/addQuantity";

const ProductItem = (props) => {
  const { eachProductDetails } = props;
  const {
    brandName,
    productName,
    productImageUrls,
    productPrice,
    productQuantity,
    _id,
  } = eachProductDetails;

  return (
    <Link to={`/product/${brandName}-${productName}?product_id=${_id}`}>
      <li className="product-item-container">
        <div className="product-item-list-button">
          <img
            className="product-item-image"
            src={productImageUrls[0]["productImageUrl"]}
            alt={productName}
          />
          <p className="product-item-brand">{brandName}</p>
          <h1 className="product-item-name">{productName}</h1>
          <p className="product-item-quantity">{productQuantity}</p>
          <div className="product-item-price-add-button">
            <p className="product-price">{productPrice}</p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ProductItem;
