import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const AdminLogoutButton = () => {
  const histroy = useHistory();

  const onClickLogOut = () => {
    Cookies.remove("admin_full_name");
    Cookies.remove("admin_jwt_token");
    histroy.replace("/");
  };

  return (
    <div>
      <button
        onClick={onClickLogOut}
        type="button"
        className="admin-landing-button"
      >
        Log out
      </button>
    </div>
  );
};

export default AdminLogoutButton;
