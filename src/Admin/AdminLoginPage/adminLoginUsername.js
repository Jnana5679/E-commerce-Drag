const AdminloginUsername = (props) => {
  const { updateAdminUsername, adminUsername } = props;

  const onEnterAdminUsername = (event) => {
    updateAdminUsername(event.target.value);
  };

  return (
    <div className="admin-login-input-container">
      <label htmlFor="adminUsername">Username</label>
      <input
        onChange={onEnterAdminUsername}
        type="text"
        id="adminUsername"
        placeholder="Enter Username"
        value={adminUsername}
        className="admin-username-input"
      />
    </div>
  );
};

export default AdminloginUsername;
