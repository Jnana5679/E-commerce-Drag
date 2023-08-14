import { Component } from "react";
import CloseCrossSign from "../../components/closeCrossSign/closeCrossSign";
import "./adminLoginPage.css";

import AdminloginUsername from "./adminLoginUsername";
import AdminLoginPassword from "./adminLoginPassword";
import AdminLoginButton from "./adminLoginButton";

class AdminLoginPage extends Component {
  state = { adminUsername: "", adminPassword: "" };

  updateAdminUsername = (value) => {
    this.setState({ adminUsername: value });
  };

  updateAdminPassword = (value) => {
    this.setState({ adminPassword: value });
  };

  onSubmitAdminLoginForm = (event) => {
    event.preventDefault();
  };

  render() {
    const { adminUsername, adminPassword } = this.state;
    return (
      <div className="admin-loginpage-container">
        <form
          onSubmit={this.onSubmitAdminLoginForm}
          className="admin-login-form"
        >
          <CloseCrossSign />
          <h1>Admin Login</h1>
          <AdminloginUsername
            updateAdminUsername={this.updateAdminUsername}
            adminUsername={adminUsername}
          />
          <AdminLoginPassword
            updateAdminPassword={this.updateAdminPassword}
            adminPassword={adminPassword}
          />
          <AdminLoginButton
            adminUsername={adminUsername}
            adminPassword={adminPassword}
          />
        </form>
      </div>
    );
  }
}

export default AdminLoginPage;
