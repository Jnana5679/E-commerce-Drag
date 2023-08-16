import AddQuantity from "../addButton/addQuantity";
import CartContext from "../../cartContext/cartContext";

const CartItemView = (props) => {
  const { cartItem } = props;

  const {
    brandName,
    productName,
    productImageUrls,
    productPrice,
    productDiscount,
    productQuantity,
  } = cartItem;

  const renderDiscount = () => {
    if (productDiscount !== 0) {
      const price = parseInt(productPrice.replace(" ", "").slice(2));
      const discountedPercentage = parseInt(productDiscount) / 100;
      const discountedPrice = price - price * discountedPercentage;
      return (
        <>
          <p className="product-normal-price">₹ {price}</p>
          <p className="product-discounted-price">
            ₹ {Math.round(discountedPrice)}
          </p>
        </>
      );
    } else {
      const price = parseInt(productPrice.replace(" ", "").slice(2));
      return <p className="product-price">₹ {price}</p>;
    }
  };

  return (
    <div className="each-cart-item-container">
      <button className="each-cart-item-image-button">
        <img
          className="each-cart-item-image"
          src={productImageUrls[0]["productImageUrl"]}
          alt={productName}
        />
      </button>
      <button className="each-cart-item-product-details-button">
        <p>
          {brandName} {productName}
        </p>
        <p className="each-cart-item-product-details-quantity">
          {productQuantity}
        </p>
      </button>
      <AddQuantity productDetails={cartItem} />
      <div className="each-cart-item-price">
        {productDiscount !== "0" ? <p>{renderDiscount()}</p> : ""}
      </div>
    </div>
  );
};

export default CartItemView;
