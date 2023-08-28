import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "js-cookie";

const LoginButton = (props) => {
  const histroy = useHistory();

  const { username, password, rememberUsernameAndPassword } = props;

  const onSuccessfullApiCall = (data) => {
    Cookies.set("user-token", data.jwt_token, { expires: 30 });
    localStorage.setItem("LogedInUsername", data.userfullName);
    if (rememberUsernameAndPassword === true) {
      localStorage.setItem("UserLoginEmail", username);
      localStorage.setItem("UserLoginPassword", password);
    }
    histroy.replace("/");
  };

  const onFailedApiCall = async (data) => {
    const { updateErrorMessageStatus } = props;
    updateErrorMessageStatus(data.error_msg, true);
  };

  const onClickLoginButton = async () => {
    let loginApiUrl;
    if (window.innerWidth < 600) {
      loginApiUrl = `${process.env.REACT_APP_API_URL_KEY_SM}/user/login`;
    } else {
      loginApiUrl = `${process.env.REACT_APP_API_URL_KEY_BG}/user/login`;
    }
    const userDetails = JSON.stringify({ username, password });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userDetails,
    };
    const response = await fetch(loginApiUrl, options);
    const data = await response.json();
    if (response.status === 200) {
      onSuccessfullApiCall(data);
    } else {
      onFailedApiCall(data);
    }
  };

  return (
    <button type="submit" onClick={onClickLoginButton} className="login-button">
      Login
    </button>
  );
};

export default LoginButton;
