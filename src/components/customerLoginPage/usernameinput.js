import { useState, useEffect } from "react";

const UserNameInput = (props) => {
  const [usernameError, setUsernameError] = useState(false);
  const [userName, setUserName] = useState("");

  const { updateUsername } = props;

  useEffect(() => {
    const getUserNameFromLocalStorage = localStorage.getItem("UserLoginEmail");
    if (getUserNameFromLocalStorage === null) {
      setUserName("");
    } else {
      setUserName(getUserNameFromLocalStorage);
    }
  }, []);

  const onChangeUsername = (event) => {
    updateUsername(event.target.value);
    setUsernameError(false);
    setUserName(event.target.value);
  };

  const onBlurUsername = (event) => {
    if (event.target.value === "") {
      setUsernameError(true);
    }
  };

  return (
    <div className="user-input-container">
      <label htmlFor="username">Username</label>
      <input
        onChange={onChangeUsername}
        type="username"
        id="username"
        placeholder="Enter Username"
        onBlur={onBlurUsername}
        className={usernameError ? "error-box" : ""}
        value={userName}
      />
      {usernameError && <p className="error-message">Username Required*</p>}
    </div>
  );
};

export default UserNameInput;
