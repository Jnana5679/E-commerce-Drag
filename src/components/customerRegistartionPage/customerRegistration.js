import { Component } from "react";
import { Link } from "react-router-dom";
import CustomerNameInput from "./customerNameInput";
import CustomerMailInput from "./customerMailInput";
import CustomerConfirmPassword from "./customerConfirmPasswordInput";
import CloseCrossSign from "../../components/closeCrossSign/closeCrossSign";
import SignupButton from "./customerRegistrationSignupButton";
import "./customerRegistration.css";

class CustomerRegistration extends Component {
  state = {
    showConfirmPassword: false,
    firstname: "",
    lastname: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstNameError: false,
    lastnameError: false,
    mobileNumberError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  };

  updateFirstNameError = (value) => {
    this.setState({ firstNameError: value });
  };

  updateLastNameError = (value) => {
    this.setState({ lastnameError: value });
  };

  updateMobileNumberError = (value) => {
    this.setState({ mobileNumberError: value });
  };

  updateEmailError = (value) => {
    this.setState({ emailError: value });
  };

  updatePasswordError = (value) => {
    this.setState({ passwordError: value });
  };

  updateConfirmPasswordError = (value) => {
    this.setState({ confirmPasswordError: value });
  };

  updateFirstName = (firstname) => {
    this.setState({ firstname });
  };

  updateLastName = (lastname) => {
    this.setState({ lastname });
  };

  toggleConfirmPassword = () => {
    this.setState((prevState) => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  };

  onEnterMobileNumber = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };

  updateEmail = (email) => {
    this.setState({ email });
  };

  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  updateConfirmPassword = (confirmPassword) => {
    this.setState({ confirmPassword });
  };

  render() {
    const {
      showConfirmPassword,
      password,
      email,
      firstname,
      lastname,
      mobileNumber,
      confirmPassword,
      firstNameError,
      lastnameError,
      mobileNumberError,
      emailError,
      passwordError,
      confirmPasswordError,
    } = this.state;
    return (
      <div className="customer-registration-container">
        <form className="customer-registration-form">
          <CloseCrossSign />
          <h1>Customer Registration</h1>
          <CustomerNameInput
            firstnameError={firstNameError}
            lastnameError={lastnameError}
            updateFirstName={this.updateFirstName}
            updateLastName={this.updateLastName}
          />
          <div className="customer-input-container">
            <label htmlFor="mobileNumber">Mobile Number*</label>
            <input
              onChange={this.onEnterMobileNumber}
              id="mobileNumber"
              type="number"
              placeholder="ex: 00000 00000"
              className={mobileNumberError ? "registration-error-box" : ""}
            />
          </div>
          <CustomerMailInput
            emailError={emailError}
            updateEmail={this.updateEmail}
          />
          <div className="customer-input-container">
            <label htmlFor="password">Password*</label>
            <input
              onChange={this.updatePassword}
              id="password"
              type="password"
              placeholder="Enter Password"
              className={passwordError ? "registration-error-box" : ""}
            />
          </div>
          <CustomerConfirmPassword
            confirmPasswordError={confirmPasswordError}
            password={password}
            updateConfirmPassword={this.updateConfirmPassword}
            showConfirmPassword={showConfirmPassword}
            toggleConfirmPassword={this.toggleConfirmPassword}
          />
          <SignupButton
            firstname={firstname}
            lastname={lastname}
            mobileNumber={mobileNumber}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            updateFirstNameError={this.updateFirstNameError}
            updateLastNameError={this.updateLastNameError}
            updateMobileNumberError={this.updateMobileNumberError}
            updateEmailError={this.updateEmailError}
            updatePasswordError={this.updatePasswordError}
            updateConfirmPasswordError={this.updateConfirmPasswordError}
          />
          <p className="redirect-to-link-text">
            Already a user plaese{" "}
            <span>
              <Link to="/customer/Login">Login</Link>
            </span>{" "}
            here
          </p>
        </form>
      </div>
    );
  }
}

export default CustomerRegistration;
