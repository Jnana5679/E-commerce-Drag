import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { BsBag } from "react-icons/bs";
import "./index.css";
import CartContext from "../../cartContext/cartContext";

class CartButton extends Component {
  onClickCartButton = () => {
    const { history } = this.props;
    history.push("/customer/cart-view");
  };

  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;
          const cartItemsLength = cartList.length;
          return (
            <div>
              <button className="cart-button" onClick={this.onClickCartButton}>
                <BsBag className="cart-icon" />
                {cartItemsLength === 0 ? (
                  ""
                ) : (
                  <p className="cart-items">{cartItemsLength}</p>
                )}
              </button>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default withRouter(CartButton);
