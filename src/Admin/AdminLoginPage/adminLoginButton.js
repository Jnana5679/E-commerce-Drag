import { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

const AdminLoginButton = (props) => {
  const { adminUsername, adminPassword } = props;

  const history = useHistory();

  const [showError, setErrorValue] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSuccessfulAdminLogin = (data) => {
    Cookies.set("admin_full_name", data.adminFullName, { expires: 5 });
    Cookies.set("admin_jwt_token", data.jwt_token, { expires: 5 });
    history.replace("/admin/Landing-page");
  };

  const onFailedAdminLogin = (data) => {
    setErrorValue(true);
    setErrorMsg(data.error_msg);
  };

  const onClickAdminLoginButton = async () => {
    let adminLoginApiUrl;
    if (window.innerWidth <= 600) {
      adminLoginApiUrl = "http://192.168.1.11:3005/admin/login";
    } else {
      adminLoginApiUrl = "http://localhost:3005/admin/login";
    }
    const adminDetails = JSON.stringify({
      username: adminUsername,
      password: adminPassword,
    });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: adminDetails,
    };
    const response = await fetch(adminLoginApiUrl, options);
    const data = await response.json();
    if (response.status === 200) {
      onSuccessfulAdminLogin(data);
    }
    onFailedAdminLogin(data);
  };

  return (
    <>
      <button
        onClick={onClickAdminLoginButton}
        type="button"
        className="admin-login-button"
      >
        Login
      </button>
      {showError && <p className="error-message">*{errorMsg}</p>}
    </>
  );
};

export default AdminLoginButton;
