import { useState, useEffect } from "react";

const PasswordInput = (props) => {
  const [ShowpasswordError, setShowPasswordError] = useState(false);
  const [passwordFromStorage, setPassword] = useState("");
  const { showPaswword, updatePassword } = props;

  useEffect(() => {
    const getPasswordFromLocalStorage =
      localStorage.getItem("UserLoginPassword");
    if (getPasswordFromLocalStorage === null) {
      setPassword("");
    } else {
      setPassword(getPasswordFromLocalStorage);
    }
  }, []);

  const onChnagePasswordInput = (event) => {
    updatePassword(event.target.value);
    setShowPasswordError(false);
    setPassword(event.target.value);
  };

  const onBlurPasswordInput = (event) => {
    if (event.target.value === "") {
      setShowPasswordError(true);
    }
  };

  return (
    <div className="user-input-container">
      <label htmlFor="password">Password</label>
      <input
        onBlur={onBlurPasswordInput}
        onChange={onChnagePasswordInput}
        type={showPaswword ? "text" : "password"}
        id="password"
        placeholder="Enter Password"
        className={ShowpasswordError ? "error-box" : ""}
        value={passwordFromStorage}
      />
      {ShowpasswordError && <p className="error-message">Password Required*</p>}
    </div>
  );
};

export default PasswordInput;
