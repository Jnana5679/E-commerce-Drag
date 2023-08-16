import { Component } from "react";
import { BiArrowBack } from "react-icons/bi";
import CartContext from "../../cartContext/cartContext";
import CartItemView from "./cartItemView";
import "./index.css";

class CartView extends Component {
  onClickCartBackButton = () => {
    const { history } = this.props;
    history.goBack();
  };

  renderNoItemsInCartPage = () => {
    return (
      <div>
        <h1>No item in cart</h1>
        <button type="button">Shop Now</button>
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
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartView;
