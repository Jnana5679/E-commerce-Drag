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
    <li className="product-item-container">
      <Link to={`/product/${brandName}-${productName}?product_id=${_id}`}>
        {" "}
        <div className="product-item-list-button">
          <img
            className="product-item-image"
            src={productImageUrls[0]["productImageUrl"]}
            alt={productName}
          />
          <p className="product-item-brand">{brandName}</p>
          <h1 className="product-item-name">{productName}</h1>
          <p className="product-item-quantity">{productQuantity}</p>
          <p className="product-price">{productPrice}</p>
        </div>
      </Link>
      <div className="product-item-price-add-button">
        <AddQuantity productDetails={eachProductDetails} />
      </div>
    </li>
  );
};

export default ProductItem;
