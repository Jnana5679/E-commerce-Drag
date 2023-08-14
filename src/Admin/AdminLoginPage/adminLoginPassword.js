import { useState } from "react";

const AdminLoginPassword = (props) => {
  const { updateAdminPassword, adminPassword } = props;

  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onEnterPassword = (event) => {
    updateAdminPassword(event.target.value);
  };

  return (
    <div>
      <div className="admin-login-input-container">
        <label htmlFor="adminPassword">Password</label>
        <div className="admin-password-input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="adminPassword"
            placeholder="Enter Password"
            className="admin-password-input"
            onChange={onEnterPassword}
            value={adminPassword}
          />
          <button
            onClick={onClickShowPassword}
            type="button"
            className="admin-password-show-button"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPassword;
