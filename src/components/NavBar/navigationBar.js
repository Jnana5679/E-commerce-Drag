import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ProfileDropDown from "../UserDetailsDrawer/index";
import "./index.css";

const NavigationBar = (props) => {
  const onClickHomeButton = () => {
    const { history } = props;
    history.push("/");
  };

  return (
    <div className="nav-bar">
      <h1>Address</h1>
      <button type="button" onClick={onClickHomeButton}>
        Home
      </button>
      <ProfileDropDown />
    </div>
  );
};

export default withRouter(NavigationBar);
