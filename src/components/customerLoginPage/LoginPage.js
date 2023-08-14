import { Link } from "react-router-dom";
import { Component } from "react";
import ShowPassword from "./showPassword";
import UserNameInput from "./usernameinput";
import PasswordInput from "./passwordInput";
import CloseCrossSign from "../../components/closeCrossSign/closeCrossSign";
import GoogleAuth from "../../FirebaseLogin/googleSignIn";
import LoginButton from "./LoginButton";
import "./LoginPageStyle.css";

class CustomerLoginPage extends Component {
  state = {
    showPaswword: false,
    username: "",
    password: "",
    showErrorMsg: false,
    errorMessage: "",
    // rememberUsernameAndPassword: false,
  };

  onSubmitForm = (event) => {
    event.preventDefault();
  };

  updateUsername = (username) => {
    this.setState({ username });
  };

  updatePassword = (password) => {
    this.setState({ password });
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPaswword: !prevState.showPaswword,
    }));
  };

  updateErrorMessageStatus = (error_Message, show_ErrorMsg) => {
    this.setState({ errorMessage: error_Message, showErrorMsg: show_ErrorMsg });
  };

  // onClickRememberMe = () => {
  //   // const { username, password } = this.state;
  //   // localStorage.setItem("UserLoginEmail", username);
  //   // localStorage.setItem("UserLoginPassword", password);
  //   this.setState((prevState) => ({
  //     rememberUsernameAndPassword: !prevState.rememberUsernameAndPassword,
  //   }));
  // };

  render() {
    const {
      showPaswword,
      username,
      password,
      showErrorMsg,
      errorMessage,
      rememberUsernameAndPassword,
    } = this.state;
    return (
      <div className="customer-login-page-container">
        <form onSubmit={this.onSubmitForm} className="customer-login-form">
          <CloseCrossSign />
          <h1>Customer Login</h1>
          <UserNameInput updateUsername={this.updateUsername} />
          <PasswordInput
            showPaswword={showPaswword}
            updatePassword={this.updatePassword}
          />

          {/* <div className="checkbox">
            <input
              onClick={this.onClickRememberMe}
              type="checkbox"
              id="rememberMe"
            />
            <label htmlFor="rememberMe">Remember Me</label>
          </div> */}

          <ShowPassword toggleShowPassword={this.toggleShowPassword} />
          {showErrorMsg && <p className="error-message">{errorMessage}</p>}
          <LoginButton
            updateErrorMessageStatus={this.updateErrorMessageStatus}
            username={username}
            password={password}
            rememberUsernameAndPassword={rememberUsernameAndPassword}
          />
          <div className="or-separation">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="alternate-login-methods">
            <GoogleAuth />
          </div>
          <p className="new-user-text">
            New User Please{" "}
            <span>
              <Link to="/customer/Registration" className="register-text">
                Register
              </Link>
            </span>{" "}
            Here
          </p>
        </form>
      </div>
    );
  }
}

export default CustomerLoginPage;
