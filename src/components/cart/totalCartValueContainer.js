/* eslint-disable array-callback-return */
import { Component } from "react";
import Cookies from "js-cookie";
import CartContext from "../../cartContext/cartContext";

class TotalCartValueContainer extends Component {
  state = { couponDiscount: 0 };

  componentDidMount = () => {
    const couponDiscount = Cookies.get("couponDiscount");
    if (couponDiscount !== undefined) {
      this.setState({ couponDiscount: couponDiscount });
    }
  };

  getCounponDiscount = () => {
    const { couponDiscount } = this.state;
    return couponDiscount;
  };

  render() {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { cartList } = value;

          let totalValueOfCartAfterDiscount = 0;

          let totalValueOfCartBeforeDiscount = 0;

          cartList.map((eachCartItem) => {
            totalValueOfCartBeforeDiscount += parseInt(
              eachCartItem["productPrice"].slice(3) * eachCartItem.quantity
            );

            if (eachCartItem.productDiscount !== "0") {
              const price = parseInt(
                eachCartItem.productPrice.replace(" ", "").slice(2)
              );
              const discountedPercentage =
                parseInt(eachCartItem.productDiscount) / 100;
              const discountedPrice = price - price * discountedPercentage;
              totalValueOfCartAfterDiscount +=
                Math.round(discountedPrice) * eachCartItem.quantity;
            } else {
              const price = parseInt(
                eachCartItem.productPrice.replace(" ", "").slice(2)
              );
              totalValueOfCartAfterDiscount += price * eachCartItem.quantity;
            }

            Cookies.set("totalCartValue", totalValueOfCartBeforeDiscount);
          });

          const getCouponDiscount = this.getCounponDiscount();

          return (
            <>
              <h1>Bill Details</h1>
              <div className="bill-details">
                <div>
                  <h1>MRP Total</h1>
                  <p>₹ {totalValueOfCartBeforeDiscount}</p>
                </div>
                <div>
                  <h1>Item Savings</h1>
                  <p className="item-savings">
                    - ₹{" "}
                    {totalValueOfCartBeforeDiscount -
                      totalValueOfCartAfterDiscount}
                  </p>
                </div>
                <div>
                  <h1>
                    Handling Fee <br />
                    <span className="handling-fee-message">
                      (If cart value is more than{" "}
                      <span className="handling-fee-message-price">₹149</span>,
                      Handling fee is{" "}
                      <span className="handling-fee-offer">₹ 0</span>)
                    </span>
                  </h1>
                  {totalValueOfCartBeforeDiscount < 149 ? (
                    <p>₹ 5</p>
                  ) : (
                    <p>₹ 0</p>
                  )}
                </div>
                {getCouponDiscount > 0 && (
                  <div>
                    <h1>Coupon Discount</h1>
                    <p className="item-savings">-{getCouponDiscount}</p>
                  </div>
                )}
                <hr />
                <div>
                  <h1 className="to-pay-text">To Pay</h1>
                  <p className="strike-off">
                    ₹ {totalValueOfCartBeforeDiscount}
                  </p>
                  {totalValueOfCartBeforeDiscount < 149 ? (
                    <p>
                      ₹ {totalValueOfCartAfterDiscount + 5 - getCouponDiscount}
                    </p>
                  ) : (
                    <p>₹ {totalValueOfCartAfterDiscount - getCouponDiscount}</p>
                  )}
                </div>
              </div>
            </>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default TotalCartValueContainer;
