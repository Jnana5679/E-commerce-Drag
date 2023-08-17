import { Component } from "react";
import { BsTrash } from "react-icons/bs";
import CartContext from "../../cartContext/cartContext";

class CartViewDeleteButton extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { deleteCartItem } = value;

          const onClickDelete = () => {
            const { productDetails } = this.props;
            deleteCartItem(productDetails._id);
          };

          const renderDeleteButton = () => {
            if (window.innerWidth < 600) {
              return (
                <>
                  <button onClick={onClickDelete}>
                    <BsTrash />
                  </button>
                </>
              );
            } else {
              return (
                <>
                  <button onClick={onClickDelete}>Remove</button>
                </>
              );
            }
          };

          return <div>{renderDeleteButton()}</div>;
        }}
      </CartContext.Consumer>
    );
  }
}

export default CartViewDeleteButton;
