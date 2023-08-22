import { Component } from "react";
import { BiArrowBack } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import "./couponsSectionStylesheet.css";

const couponCodesList = ["FIRSTUSR", "HIDDENGEM"];

class CouponsSection extends Component {
  state = { couponCode: "FIRSTUSR", showError: false, errorMsg: "" };

  onEnterCouponCode = (e) => {
    this.setState({ couponCode: e.target.value, showError: false });
  };

  onClickApplyCoupon = () => {
    const { couponCode } = this.state;
    const { history } = this.props;
    const totalCartValue = Cookies.get("totalCartValue");
    if (totalCartValue > 249) {
      if (couponCodesList.includes(couponCode)) {
        const couponDiscount = Math.floor(Math.random() * (150 - 100) + 100);
        Cookies.set("couponDiscount", couponDiscount);
        Cookies.set("couponCode", couponCode);
        history.goBack();
      } else {
        this.setState({ showError: true, errorMsg: "Invalid Coupon Code" });
      }
    } else {
      this.setState({
        showError: true,
        errorMsg: "Cart value must be more than 249",
      });
    }
  };

  onClickBackButton = () => {
    const { history } = this.props;
    history.goBack();
  };

  renderApplyButton = () => {
    return (
      <button className="coupon-apply-button" onClick={this.onClickApplyCoupon}>
        Apply
      </button>
    );
  };

  renderCouponsNav = () => {
    return (
      <div className="coupons-section-nav">
        <button
          onClick={this.onClickBackButton}
          className="coupons-section-back-icon"
          type="button"
        >
          <BiArrowBack />
        </button>
        <h1>Apply Coupon</h1>
        <div>{this.renderEnterCoupon()}</div>
      </div>
    );
  };

  renderEnterCoupon = () => {
    const { couponCode, showError, errorMsg } = this.state;
    return (
      <>
        <div className="enter-coupon-code-box">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            onChange={this.onEnterCouponCode}
            value={couponCode}
          />
          {couponCode !== "" && this.renderApplyButton()}
        </div>
        {showError && <p className="coupon-error-message">{errorMsg}</p>}
      </>
    );
  };

  renderAvailableCoupons = () => {
    return (
      <div className="available-coupons-section">
        <h1 className="available-coupons-section-heading">Available Coupons</h1>
        <div className="available-coupon">
          <div className="available-coupon-first-half">
            <div className="available-coupon-icon">
              <TbDiscount2 className="offer-icon" />
              <p>FIRSTUSR</p>
            </div>
            {this.renderApplyButton()}
          </div>
          <hr className="horizontal-line" />
          <p className="coupon-description">
            Use coupone FIRSTUSR to get upto ₹150 off on order value above ₹ 249
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="coupons-section-container">
        {this.renderCouponsNav()}
        {this.renderAvailableCoupons()}
      </div>
    );
  }
}

export default withRouter(CouponsSection);
