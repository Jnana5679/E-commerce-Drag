import { useState } from "react";
import "./index.css";

const SearchBar = () => {
  const [showSearchPopUp, setShowPopUpValue] = useState(false);

  const onClickSearchBar = () => {
    setShowPopUpValue(true);
  };

  const onClickCrossButton = () => {
    setShowPopUpValue(false);
  };

  return (
    <div>
      <div className="search-box-container">
        <input
          onClick={onClickSearchBar}
          type="search"
          placeholder="Search For Coffee"
          className="search-box"
        />
      </div>
      {showSearchPopUp && (
        <div className="search-result-container">
          <div className="search-pop-up-close-button">
            <button onClick={onClickCrossButton}>X</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
