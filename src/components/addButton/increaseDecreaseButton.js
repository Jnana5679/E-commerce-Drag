import { Component } from "react";

class IncrementAndDecrementQty extends Component {
  incrementQuantity = () => {
    const { updateIncrementQuantity } = this.props;
    updateIncrementQuantity();
  };

  decrementQuantity = () => {
    const { updateDecrementQuantity } = this.props;
    updateDecrementQuantity();
  };

  render() {
    const { quantityAdded } = this.props;
    return (
      <>
        <button className="decrement-button" onClick={this.decrementQuantity}>
          -
        </button>
        <p className="quantity">{quantityAdded}</p>
        <button className="increment-button" onClick={this.incrementQuantity}>
          +
        </button>
      </>
    );
  }
}

export default IncrementAndDecrementQty;
