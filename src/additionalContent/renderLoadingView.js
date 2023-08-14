import { ColorRing } from "react-loader-spinner";
import "./index.css";

const RenderLoadingView = () => {
  return (
    <div className="loading-position">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default RenderLoadingView;
