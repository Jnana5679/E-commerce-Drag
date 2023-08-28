import { Component } from "react";
import "./index.css";

import ImageCarousel from "./eachProductDetails";
import AddQuantity from "../addButton/addQuantity";
import EachProductViewNavBar from "./eachProductViewNavBar";
import RenderLoadingView from "../../additionalContent/renderLoadingView";
import RenderFailureView from "../../additionalContent/renderFailurePage";

const pageStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class ProductItemView extends Component {
  state = {
    productDetails: [],
    selectedImageUrl: "",
    productImagesList: [],
    webPageStatus: pageStatus.initial,
  };

  componentDidMount = () => {
    this.setState({ webPageStatus: pageStatus.inProgress });
    const { location } = this.props;
    const { search } = location;
    this.getProductDetailsApiCall(search.slice(12));
  };

  getProductDetailsApiCall = async (search) => {
    let getProductApi;
    if (window.innerWidth < 600) {
      getProductApi = `${process.env.REACT_APP_API_URL_KEY_SM}/get-product-by-name?product_id=${search}`;
    } else {
      getProductApi = `${process.env.REACT_APP_API_URL_KEY_BG}/get-product-by-name?product_id=${search}`;
    }
    const options = {
      mathod: "GET",
    };
    const response = await fetch(getProductApi, options);
    const data = await response.json();
    await this.setState({
      productDetails: data["productDetails"][0],
      selectedImageUrl:
        data["productDetails"][0]["productImageUrls"][0]["productImageUrl"],
      productImagesList: data["productDetails"][0]["productImageUrls"],
    });
    this.setState({ webPageStatus: pageStatus.success });
  };

  updateSelectedImageUrl = (url) => {
    this.setState({ selectedImageUrl: url });
  };

  renderSuccessView = () => {
    const { productDetails, selectedImageUrl, productImagesList } = this.state;
    const {
      brandName,
      productDescription,
      productName,
      productPrice,
      productQuantity,
    } = productDetails;
    return (
      <div className="each-product-view-container">
        <EachProductViewNavBar productName={productName} />
        <div className="image-carousel-section">
          <img
            className="each-product-image"
            src={selectedImageUrl}
            alt={productName}
          />
          <ul className="image-carousel-buttons-list">
            {productImagesList.map((eachImage) => (
              <ImageCarousel
                key={eachImage._id}
                imagesUrlList={eachImage}
                updateSelectedImageUrl={this.updateSelectedImageUrl}
                isSelected={selectedImageUrl === eachImage.productImageUrl}
              />
            ))}
          </ul>
          <div className="each-product-details">
            <p>{brandName}</p>
            <h1>{productName}</h1>
            <p>{productQuantity}</p>
            <h1>{productPrice}</h1>
          </div>
          <div className="each-product-add-quantity-container">
            <AddQuantity productDetails={productDetails} />
          </div>
        </div>
        <div className="each-product-description">
          <h1>Product Description</h1>
          <p>{productDescription}</p>
        </div>
      </div>
    );
  };

  renderEachProductViewPage = () => {
    const { webPageStatus } = this.state;

    switch (webPageStatus) {
      case pageStatus.success:
        return this.renderSuccessView();
      case pageStatus.inProgress:
        return <RenderLoadingView />;
      case pageStatus.failure:
        return <RenderFailureView />;
      default:
        return null;
    }
  };

  render() {
    return this.renderEachProductViewPage();
  }
}

export default ProductItemView;
