import { useState } from "react";
import { useHistory } from "react-router-dom";

const SignupButton = (props) => {
  const [showErrorMsg, setErrorMsgStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showDataBaseErrorMsg, setDataBaseErrorMsgStatus] = useState(false);

  const history = useHistory();

  const {
    firstname,
    lastname,
    mobileNumber,
    email,
    password,
    confirmPassword,
    updateFirstNameError,
    updateLastNameError,
    updateMobileNumberError,
    updateEmailError,
    updatePasswordError,
    updateConfirmPasswordError,
  } = props;

  const onSuccessfullRegistration = (data) => {
    history.replace("/successfull-registration");
  };

  const onFailedRegistration = (data) => {
    setDataBaseErrorMsgStatus(true);
    setErrorMessage(data.error_msg);
  };

  const callRegistrationApi = async () => {
    let registrationApiUrl;
    if (window.innerWidth <= 600) {
      registrationApiUrl = "http://192.168.1.11:3005/user/register";
    } else {
      registrationApiUrl = "http://localhost:3005/user/register";
    }
    const userData = JSON.stringify({
      firstname,
      lastname,
      mobileNumber,
      email,
      password,
    });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userData,
    };
    const response = await fetch(registrationApiUrl, options);
    const data = await response.json();
    if (response.status === 200) {
      onSuccessfullRegistration(data);
    }
    onFailedRegistration(data);
  };

  const onClickSignUp = () => {
    if (firstname === "") {
      updateFirstNameError(true);
    }
    if (lastname === "") {
      updateLastNameError(true);
    }
    if (mobileNumber <= 9) {
      updateMobileNumberError(true);
    }
    if (email === "") {
      updateEmailError(true);
    }
    if (password === "") {
      updatePasswordError(true);
    }
    if (confirmPassword === "") {
      updateConfirmPasswordError(true);
    }
    if (
      firstname === "" ||
      lastname === "" ||
      mobileNumber === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setErrorMsgStatus(true);
    } else {
      setErrorMsgStatus(false);
      callRegistrationApi();
    }
  };

  return (
    <div>
      {showErrorMsg ? (
        <p className="important-msg">Must fill all important* fields</p>
      ) : (
        ""
      )}
      {showDataBaseErrorMsg ? (
        <p className="important-msg">{errorMessage}</p>
      ) : (
        ""
      )}
      <button onClick={onClickSignUp} className="sign-up-button" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignupButton;
