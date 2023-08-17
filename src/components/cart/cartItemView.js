import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import AddQuantity from "../addButton/addQuantity";
import CartViewDeleteButton from "./deleteButton";

const CartItemView = (props) => {
  const { cartItem } = props;

  const {
    brandName,
    productName,
    productImageUrls,
    productPrice,
    productDiscount,
    productQuantity,
    quantity,
  } = cartItem;

  const renderDiscount = () => {
    if (productDiscount !== "0") {
      const price = parseInt(productPrice.replace(" ", "").slice(2));
      const discountedPercentage = parseInt(productDiscount) / 100;
      const discountedPrice = price - price * discountedPercentage;
      return (
        <>
          <p className="product-normal-price">₹ {price * quantity}</p>
          <p className="product-discounted-price">
            ₹ {Math.round(discountedPrice) * quantity}
          </p>
        </>
      );
    } else {
      const price = parseInt(productPrice.replace(" ", "").slice(2));
      return <p className="product-price">₹ {price * quantity}</p>;
    }
  };

  const onClickEachCartItem = () => {
    const { cartItem, history } = props;
    const { brandName, _id, productName } = cartItem;
    const productNameToLink = brandName + "-" + productName;
    history.replace(`/product/${productNameToLink}?product_id=${_id}`);
  };

  return (
    <div className="each-cart-item-container">
      <button
        onClick={onClickEachCartItem}
        className="each-cart-item-image-button"
      >
        <img
          className="each-cart-item-image"
          src={productImageUrls[0]["productImageUrl"]}
          alt={productName}
        />
      </button>
      <button
        onClick={onClickEachCartItem}
        className="each-cart-item-product-details-button"
      >
        <h1>
          {brandName} {productName}
        </h1>
        <p className="each-cart-item-product-details-quantity">
          {productQuantity}
        </p>
      </button>
      <AddQuantity productDetails={cartItem} />
      <div className="cart-item-delete-button">
        <CartViewDeleteButton productDetails={cartItem} />
      </div>
      <div className="each-cart-item-price">{renderDiscount()}</div>
    </div>
  );
};

export default withRouter(CartItemView);
