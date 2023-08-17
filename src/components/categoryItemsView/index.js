import { Component } from "react";

import NavigationBar from "../NavBar/navigationBar";
import SearchBar from "../SearchBar/index";
import ProductItem from "./productItem";
import "./index.css";
import RenderLoadingView from "../../additionalContent/renderLoadingView";
import RenderFailureView from "../../additionalContent/renderFailurePage";

const pageStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class CategoryItemsViewPage extends Component {
  state = {
    categoryId: "",
    productsListFromDb: [],
    categoryName: "",
    webPageStatus: pageStatus.initial,
  };

  componentDidMount = async () => {
    this.setState({ webPageStatus: pageStatus.inProgress });
    const { match, location } = this.props;
    const { params } = match;
    const { id } = params;
    const { search } = location;
    await this.setState({ categoryId: id });
    await this.setState({ categoryName: search.slice(15) });
    this.getProductsApi();
  };

  onSuccessfullApiCall = (data) => {
    this.setState({ productsListFromDb: data.productsList });
    this.setState({ webPageStatus: pageStatus.success });
  };

  onFailedApiCall = (data) => {
    this.setState({ webPageStatus: pageStatus.failure });
  };

  getProductsApi = async () => {
    const { categoryId } = this.state;
    let getProductsApiUrl;
    if (window.innerWidth < 600) {
      getProductsApiUrl = `http://192.168.1.11:3005/get-products-list-by-category/?productCategory=${categoryId}`;
    } else {
      getProductsApiUrl = `http://localhost:3005/get-products-list-by-category/?productCategory=${categoryId}`;
    }
    const options = {
      method: "GET",
    };
    const response = await fetch(getProductsApiUrl, options);
    const data = await response.json();
    if (response.status === 200) {
      this.onSuccessfullApiCall(data);
    } else {
      this.onFailedApiCall(data);
    }
  };

  renderCategoryItemsView = () => {
    const { productsListFromDb, categoryName } = this.state;
    return (
      <div className="selected-category-items-view-container">
        <NavigationBar />
        <SearchBar />
        <div className="selected-category-items-view-title">
          <hr />
          <h1>
            {categoryName.replace("%20", " ")} ({productsListFromDb.length}{" "}
            Items)
          </h1>
          <hr />
        </div>
        <ul className="product-item-list-container">
          {productsListFromDb.map((eachProduct) => (
            <ProductItem
              key={eachProduct._id}
              eachProductDetails={eachProduct}
            />
          ))}
        </ul>
      </div>
    );
  };

  renderItemsBasedOnPageStatus = () => {
    const { webPageStatus } = this.state;
    switch (webPageStatus) {
      case pageStatus.success:
        return this.renderCategoryItemsView();
      case pageStatus.inProgress:
        return <RenderLoadingView />;
      case pageStatus.failure:
        return <RenderFailureView />;
      default:
        return null;
    }
  };

  render() {
    return this.renderItemsBasedOnPageStatus();
  }
}

export default CategoryItemsViewPage;
