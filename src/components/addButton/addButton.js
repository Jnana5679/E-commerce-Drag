import { Component } from "react";
import CartContext from "../../cartContext/cartContext";

class AddButton extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { addCartItem } = value;

          const addItemToCart = () => {
            const { productDetails } = this.props;
            const productDetailsAddedToCart = {
              ...productDetails,
              quantity: 1,
            };
            addCartItem(productDetailsAddedToCart, productDetails._id);
          };

          const onClickAddButton = () => {
            const { updateQuantity } = this.props;
            updateQuantity();
            addItemToCart();
          };

          return (
            <button
              type="button"
              className="add-button"
              onClick={onClickAddButton}
            >
              Add
            </button>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default AddButton;
