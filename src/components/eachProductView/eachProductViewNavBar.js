import BackArrow from "./backArrow";
import CartButton from "../cartButton/cartButton";

const EachProductViewNavBar = (props) => {
  const { productName } = props;

  return (
    <div className="each-product-view-navbar">
      <div className="each-product-view-arrow-and-name">
        <BackArrow />
        <h1>{productName}</h1>
      </div>
      <div className="each-product-view-cart-button">
        <CartButton />
      </div>
    </div>
  );
};

export default EachProductViewNavBar;
