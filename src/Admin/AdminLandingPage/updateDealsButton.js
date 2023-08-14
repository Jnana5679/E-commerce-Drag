import { Link } from "react-router-dom/cjs/react-router-dom.min";

const UpdateDealsButton = () => {
  return (
    <Link to="/admin/update-deals">
      <button type="button" className="admin-landing-button">
        Update Deals
      </button>
    </Link>
  );
};

export default UpdateDealsButton;
