import { Link } from "react-router-dom";

const UploadProductButton = () => {
  return (
    <>
      <Link to="/admin/upload-new-product">
        <button type="button" className="admin-landing-button">
          Upload New Product
        </button>
      </Link>
    </>
  );
};

export default UploadProductButton;
