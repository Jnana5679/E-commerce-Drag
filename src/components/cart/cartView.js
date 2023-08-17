import { Component } from "react";
import { BiArrowBack } from "react-icons/bi";
import CartContext from "../../cartContext/cartContext";
import CartItemView from "./cartItemView";
import "./index.css";
import TotalCartValueContainer from "./totalCartValueContainer";
import IdontNeedABag from "./idontneedabag";
import CancellationWarning from "./cancellationWarning";

class CartView extends Component {
  onClickCartBackButton = () => {
    const { history } = this.props;
    history.goBack();
  };

  onClickShopNowButton = () => {
    const { history } = this.props;
    history.replace("/");
  };

  renderNoItemsInCartPage = () => {
    return (
      <div className="cart-view-no-items">
        <h1>No item in cart</h1>
        <button onClick={this.onClickShopNowButton} type="button">
          Shop Now
        </button>
      </div>
    );
  };

  renderCartItems = (cartList) => {
    return (
      <div>
        <h1>Review Items</h1>
        {cartList.map((eachCartItem) => (
          <CartItemView cartItem={eachCartItem} key={eachCartItem._id} />
        ))}
      </div>
    );
  };

  renderCartViewDetails = (cartList) => {
    return (
      <>
        <div className="i-dont-need-bag-container">
          <IdontNeedABag />
        </div>
        <div className="bill-total-container">
          <TotalCartValueContainer cartList={cartList} />
        </div>
        <div className="cancellation-warning-container">
          <CancellationWarning />
        </div>
      </>
    );
  };

  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          return (
            <div className="cart-container">
              <div className="cart-navbar">
                <button
                  className="cart-back-button"
                  onClick={this.onClickCartBackButton}
                >
                  <BiArrowBack />
                </button>
                <h1>Your Cart</h1>
              </div>
              {cartList.length === 0
                ? this.renderNoItemsInCartPage()
                : this.renderCartItems(cartList)}
              {cartList.length !== 0 && this.renderCartViewDetails(cartList)}
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartView;
