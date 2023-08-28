import { Component } from "react";
import SearchItemView from "./searchItemView";
import "./index.css";

class SearchBar extends Component {
  state = {
    showSearchPopUp: false,
    searchItem: "",
    productsList: [],
    filteredProductsList: [],
  };

  componentDidMount = async () => {
    const { searchItemValue } = this.props;
    this.setState({ searchItem: searchItemValue });
    let api_url;
    if (window.innerWidth < 600) {
      api_url = `${process.env.REACT_APP_API_URL_KEY_SM}/products/all`;
    } else {
      api_url = `${process.env.REACT_APP_API_URL_KEY_BG}/products/all`;
    }
    const options = {
      method: "GET",
    };
    const response = await fetch(api_url, options);
    const data = await response.json();
    if (response.status === 200) {
      this.onSuccessfullApi(data);
    } else {
      this.onFailedApi();
    }
  };

  onSuccessfullApi = (data) => {
    this.setState({ productsList: data.products_list });
  };

  onFailedApi = () => {};

  onClickSearchBar = () => {
    this.setState((prevState) => ({
      showSearchPopUp: !prevState.showSearchPopUp,
    }));
  };

  onEnterProductName = (e) => {
    this.setState({ searchItem: e.target.value, showSearchPopUp: true });
    this.filterProductsListFun(e.target.value);
  };

  filterProductsListFun = (value) => {
    const { productsList } = this.state;

    if (value !== " ") {
      const filteredProducts = productsList.filter((eachProduct) => {
        if (eachProduct.productName.includes(value)) {
          return eachProduct;
        }
      });
      this.setState({ filteredProductsList: filteredProducts });
    }
  };

  renderSearchList = () => {
    const { filteredProductsList } = this.state;
    return (
      <>
        {filteredProductsList.map((eachProduct) => {
          return (
            <SearchItemView
              key={eachProduct._id}
              filteredProductDetails={eachProduct}
            />
          );
        })}
      </>
    );
  };

  render() {
    const { showSearchPopUp, searchItem, filteredProductsList } = this.state;
    return (
      <div>
        <div className="search-box-container">
          <input
            onClick={this.onClickSearchBar}
            onChange={this.onEnterProductName}
            type="search"
            placeholder="Search For Coffee"
            className="search-box"
            value={searchItem}
          />
        </div>
        {showSearchPopUp && (
          <div className="search-result-container">
            {filteredProductsList.length !== 0 && this.renderSearchList()}
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;
