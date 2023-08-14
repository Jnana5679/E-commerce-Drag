import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductItem = (props) => {
  const { eachProductDetails } = props;
  const {
    brandName,
    productName,
    productImageUrls,
    productPrice,
    productQuantity,
  } = eachProductDetails;

  return (
    <li className="product-item-container">
      <Link to={`/product/${brandName}_${productName}`}>
        <button className="product-item-list-button">
          <img
            className="product-item-image"
            src={productImageUrls.productImageUrl1}
            alt={productName}
          />
          <p className="product-item-brand">{brandName}</p>
          <h1 className="product-item-name">{productName}</h1>
          <p className="product-item-quantity">{productQuantity}</p>
          <div className="product-item-price-add-button">
            <p className="product-price">{productPrice}</p>
            <button className="add-container-button">Add</button>
          </div>
        </button>
      </Link>
    </li>
  );
};

export default ProductItem;
