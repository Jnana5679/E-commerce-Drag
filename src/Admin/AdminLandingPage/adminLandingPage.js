import { Component } from "react";
import Cookies from "js-cookie";

import "./index.css";

import UploadProductButton from "./uploadProductButton";
import UpdateDealsButton from "./updateDealsButton";
import AdminLogoutButton from "./adminLogoutButton";

class AdminLandingPage extends Component {
  state = { adminFullName: "" };

  componentDidMount = () => {
    const adminName = Cookies.get("admin_full_name");
    this.setState({ adminFullName: adminName });
  };

  render() {
    const { adminFullName } = this.state;
    return (
      <div className="admin-landing-page">
        <div className="admin-greetings-container">
          <h1>Hello,</h1>
          <h1>{adminFullName}</h1>
        </div>
        <div className="admin-landing-page-buttons">
          <UploadProductButton />
          <UpdateDealsButton />
          <AdminLogoutButton />
        </div>
      </div>
    );
  }
}

export default AdminLandingPage;
