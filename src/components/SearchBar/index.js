import { Component } from "react";
import "./index.css";

class SearchBar extends Component {
  state = { showSearchPopUp: false };

  onClickSearchBar = () => {
    this.setState((prevState) => ({
      showSearchPopUp: !prevState.showSearchPopUp,
    }));
  };

  render() {
    const { showSearchPopUp } = this.state;
    return (
      <div>
        <div className="search-box-container">
          <input
            onClick={this.onClickSearchBar}
            type="search"
            placeholder="Search For Coffee"
            className="search-box"
          />
        </div>
        {showSearchPopUp && (
          <div className="search-result-container">
            <p>Hello</p>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
