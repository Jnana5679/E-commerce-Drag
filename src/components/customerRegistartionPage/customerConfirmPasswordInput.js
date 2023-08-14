import { useState } from "react";

const CustomerConfirmPassword = (props) => {
  const {
    toggleConfirmPassword,
    showConfirmPassword,
    password,
    updateConfirmPassword,
  } = props;

  const [confirmPasswordNotMatch, setConfirmPasswordMatchStatus] =
    useState(false);

  const onClickShowPassword = () => {
    toggleConfirmPassword();
  };

  const onEnterConfirmPassword = (event) => {
    updateConfirmPassword(event.target.value);

    if (password === event.target.value) {
      setConfirmPasswordMatchStatus(true);
    } else {
      setConfirmPasswordMatchStatus(false);
    }
  };

  return (
    <div className="customer-input-container">
      <label htmlFor="confirmPassword">Confirm Password*</label>
      <div className="confirm-password-container">
        <input
          onChange={onEnterConfirmPassword}
          id="ConfirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className={confirmPasswordNotMatch ? "registration-success-box" : ""}
        />
        <button type="button" onClick={onClickShowPassword}>
          {showConfirmPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default CustomerConfirmPassword;
