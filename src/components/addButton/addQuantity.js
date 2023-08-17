/* eslint-disable array-callback-return */
import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";
import AddButton from "./addButton";
import IncrementAndDecrementQty from "./increaseDecreaseButton";
import CartContext from "../../cartContext/cartContext";

class AddQuantity extends Component {
  state = {
    quantity: 0,
    showError: false,
    showAddButton: false,
    productDetailsInCart: [],
    productDetailsToBeUpdated: [],
  };

  componentDidMount = () => {
    const productDetailsInCart = JSON.parse(
      localStorage.getItem("product-details")
    );
    if (productDetailsInCart === null) {
      this.setState({ quantity: 0 });
    } else {
      const { productDetails } = this.props;

      const getProductById = productDetailsInCart.filter((eachProduct) => {
        if (eachProduct._id === productDetails._id) {
          return eachProduct;
        }
      });

      if (getProductById[0] === undefined) {
        this.setState({ quantity: 0 });
      } else {
        this.setState({ quantity: getProductById[0]["quantity"] });
      }
    }
  };

  updateQuantity = () => {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  };

  render() {
    const { quantity, showError } = this.state;
    const { productDetails } = this.props;
    return (
      <CartContext.Consumer>
        {(value) => {
          const { addCartItem, deleteCartItem } = value;

          const updateIncrementQuantity = () => {
            const { quantity } = this.state;
            if (quantity < 5) {
              this.setState((prevState) => ({
                quantity: prevState.quantity + 1,
              }));
              this.setState({ showError: false });
            } else {
              this.setState({ showError: true });
            }
            const productDetailsAddedToCart = {
              ...productDetails,
              quantity: quantity + 1,
            };
            addCartItem(productDetailsAddedToCart, productDetails._id);
          };

          const updateDecrementQuantity = () => {
            const { quantity } = this.state;
            if (quantity > 0) {
              this.setState((prevState) => ({
                quantity: prevState.quantity - 1,
              }));
              this.setState({ showError: false, showAddButton: false });
            } else {
              this.setState({ showAddButton: true });
            }
            const productDetailsAddedToCart = {
              ...productDetails,
              quantity: quantity - 1,
            };
            addCartItem(productDetailsAddedToCart, productDetails._id);
          };

          return (
            <div>
              <div className="each-product-add-quantity">
                {quantity === 0 ? (
                  <AddButton
                    productDetails={productDetails}
                    updateQuantity={this.updateQuantity}
                  />
                ) : (
                  <IncrementAndDecrementQty
                    updateDecrementQuantity={updateDecrementQuantity}
                    quantityAdded={quantity}
                    updateIncrementQuantity={updateIncrementQuantity}
                  />
                )}
              </div>
              {showError && (
                <p className="error-message">* Maximum aquantity added 5</p>
              )}
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default withRouter(AddQuantity);
