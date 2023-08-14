import { Redirect, Route } from "react-router-dom";
import Cookie from "js-cookie";

const AdminProtectedRoute = (props) => {
  const adminToken = Cookie.get("admin_jwt_token");
  if (adminToken === undefined) {
    return <Redirect to="/admin/Login" />;
  }
  return <Route {...props} />;
};

export default AdminProtectedRoute;
