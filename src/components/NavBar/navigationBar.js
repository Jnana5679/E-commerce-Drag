import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ProfileDropDown from "../UserDetailsDrawer/index";
import CartButton from "../cartButton/cartButton";
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
      <div className="cart-profile-dropdown-container">
        <CartButton />
        <ProfileDropDown />
      </div>
    </div>
  );
};

export default withRouter(NavigationBar);
