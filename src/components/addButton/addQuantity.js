import { Component } from "react";
import "./index.css";

class AddQuantity extends Component {
  state = { quantity: 0, showError: false, showAddButton: false };

  decrementQuantity = () => {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
      this.setState({ showError: false, showAddButton: false });
    } else {
      this.setState({ showAddButton: true });
    }
  };

  incrementQuantity = () => {
    const { quantity } = this.state;
    if (quantity < 5) {
      this.setState((prevState) => ({
        quantity: prevState.quantity + 1,
      }));
      this.setState({ showError: false });
    } else {
      this.setState({ showError: true });
    }
  };

  onClickAddButton = () => {
    const { quantity } = this.state;
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  render() {
    const { quantity, showError } = this.state;
    return (
      <div>
        <div className="each-product-add-quantity">
          {quantity === 0 ? (
            <button
              type="button"
              className="add-button"
              onClick={this.onClickAddButton}
            >
              Add
            </button>
          ) : (
            <>
              <button
                className="decrement-button"
                onClick={this.decrementQuantity}
              >
                -
              </button>
              <p className="quantity">{quantity}</p>
              <button
                className="increment-button"
                onClick={this.incrementQuantity}
              >
                +
              </button>
            </>
          )}
        </div>
        {showError && (
          <p className="error-message">* Maximum aquantity added 5</p>
        )}
      </div>
    );
  }
}

export default AddQuantity;
