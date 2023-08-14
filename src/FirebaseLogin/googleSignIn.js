import { auth, googleAuthProvider } from "./firebaseInitialiser";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "js-cookie";
import "./index.css";

const GoogleAuth = (props) => {
  const onClickGoogleIcon = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const loginToken = result.user.refreshToken;
      Cookies.set("user-token", loginToken, { expires: 30 });
      const userImageUrl = result._tokenResponse.photoUrl;
      const username = result._tokenResponse.fullName;
      localStorage.setItem("LogedInUserImage", userImageUrl);
      localStorage.setItem("LogedInUsername", username);
      const { history } = props;
      history.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button type="button" onClick={onClickGoogleIcon}>
        <FcGoogle className="google-icon" />
      </button>
    </div>
  );
};

export default withRouter(GoogleAuth);
