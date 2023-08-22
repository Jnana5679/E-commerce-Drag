import { Component } from "react";
import { TbMathGreater } from "react-icons/tb";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";

class ApplyCoupon extends Component {
  state = { couponDiscount: 0, couponCode: "" };

  componentDidMount = () => {
    const couponDiscount = Cookies.get("couponDiscount");
    const couponCode = Cookies.get("couponCode");
    this.setState({ couponDiscount: couponDiscount, couponCode: couponCode });
  };

  onClickRemove = () => {
    const { history } = this.props;
    history.go();
    this.setState({ couponDiscount: 0, couponCode: "" });
    Cookies.remove("couponDiscount");
    Cookies.remove("couponCode");
  };

  renderBeforCouponApply = () => {
    return (
      <Link to="/customer/apply-coupons-section">
        <div className="apply-coupon">
          <div className="apply-coupon-button">
            <button type="button">Apply coupon</button>
            <TbMathGreater />
          </div>
          <p>Save more with coupons available for you</p>
        </div>
      </Link>
    );
  };

  renderAfterCouponApply = () => {
    const { couponCode } = this.state;
    return (
      <div className="apply-coupon">
        <div className="apply-coupon-button">
          <h1>Applied Coupon Code : "{couponCode}"</h1>
          <button onClick={this.onClickRemove} className="coupon-apply-button">
            REMOVE
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { couponDiscount } = this.state;
    return (
      <div>
        {couponDiscount > 0
          ? this.renderAfterCouponApply()
          : this.renderBeforCouponApply()}
      </div>
    );
  }
}

export default withRouter(ApplyCoupon);
