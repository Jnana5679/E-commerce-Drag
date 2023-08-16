import { Component } from "react";
import { BsBag } from "react-icons/bs";
import "./index.css";

class CartButton extends Component {
  state = { cartItemsLength: 0 };

  render() {
    const { cartItemsLength } = this.state;
    return (
      <div>
        <button className="cart-button">
          <BsBag className="cart-icon" />
          {cartItemsLength === 0 ? (
            ""
          ) : (
            <p className="cart-items">{cartItemsLength}</p>
          )}
        </button>
      </div>
    );
  }
}

export default CartButton;
