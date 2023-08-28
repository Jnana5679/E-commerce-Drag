import { Component } from "react";
import "./index.css";

import ProductsCategoryOptions from "./selectProductCategory";
import CloudinaryUploadWidget from "./ClodinaryUploadWidget";
import ProductNameAndBrandInput from "./productNameAndBrand";
import ProductQtyAndPrice from "./productQtyAndPrice";
import ProductDescription from "./productDescription";
import ProductDiscount from "./productDiscount";

import RenderLoadingView from "../../additionalContent/renderLoadingView";
import RenderFailureView from "../../additionalContent/renderFailurePage";

const pageStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class AdminUploadProductPage extends Component {
  state = {
    webPageStatus: pageStatus.initial,
    productName: "",
    productBrand: "",
    productCategory: "",
    productQuantity: "",
    productPrice: "",
    productDiscount: "",
    productDescription: "",
    showApiSuccessMessage: false,
    showApiFailureMessage: false,
    ApiErrorMessage: "",
    ApiSuccessMessage: "",
  };

  componentDidMount = () => {
    this.setState({
      webPageStatus: pageStatus.inProgress,
      showApiFailureMessage: false,
      showApiSuccessMessage: false,
      ApiErrorMessage: "",
      ApiSuccessMessage: "",
    });
    this.startOneSecTimer();
  };

  startOneSecTimer = () => {
    let seconds = 0;

    let timer = setInterval(() => {
      if (seconds >= 1) {
        clearInterval(timer);
        this.setState({ webPageStatus: pageStatus.success });
      } else {
        seconds += 1;
      }
    }, 1000);
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  updateProductName = (value) => {
    this.setState({ productName: value });
  };

  updateProductBrand = (value) => {
    this.setState({ productBrand: value });
  };

  updateProductCategory = (value) => {
    this.setState({ productCategory: value });
  };

  updateProductPrice = (value) => {
    this.setState({ productPrice: value });
  };

  updateProductDiscount = (value) => {
    this.setState({ productDiscount: value });
  };

  updateProductDescription = (value) => {
    this.setState({ productDescription: value });
  };

  updateProductQuantity = (value) => {
    this.setState({ productQuantity: value });
  };

  onUpload = (filesUrlArray) => {
    const {
      productName,
      productBrand,
      productCategory,
      productQuantity,
      productPrice,
      productDiscount,
      productDescription,
    } = this.state;

    const productDetails = {
      brandName: productBrand,
      productName: productName,
      productCategory: productCategory,
      productQuantity: productQuantity,
      productPrice: "Rs " + productPrice,
      productDiscount: productDiscount,
      productDescription: productDescription,
      productImageUrls: filesUrlArray,
    };

    this.uploadProductDataToDataBase(productDetails);
  };

  uploadProductDataToDataBase = async (productDetails) => {
    let uploadApiUrl;
    if (window.innerWidth < 600) {
      uploadApiUrl = `${process.env.REACT_APP_API_URL_KEY_SM}/product/upload`;
    } else {
      uploadApiUrl = `${process.env.REACT_APP_API_URL_KEY_BG}/product/upload`;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDetails),
    };
    const response = await fetch(uploadApiUrl, options);
    const data = await response.json();
    if (response.status === 200) {
      this.onSuccessfullUpload(data);
    } else {
      this.onFailedUpload(data);
    }
  };

  onSuccessfullUpload = (data) => {
    this.setState({
      showApiSuccessMessage: true,
      ApiSuccessMessage: data.success_msg,
      showApiFailureMessage: false,
    });
  };

  onFailedUpload = (data) => {
    this.setState({
      showApiFailureMessage: true,
      ApiErrorMessage: data.error_msg,
      showApiSuccessMessage: false,
    });
  };

  emptyState = () => {
    this.setState({
      showApiFailureMessage: false,
      ApiErrorMessage: "",
      showApiSuccessMessage: false,
      ApiSuccessMessage: "",
    });
  };

  renderUploadProductForm = () => {
    const {
      productName,
      productBrand,
      productCategory,
      productQuantity,
      productPrice,
      productDiscount,
      productDescription,
      showApiFailureMessage,
      showApiSuccessMessage,
      ApiErrorMessage,
      ApiSuccessMessage,
    } = this.state;

    return (
      <form
        onSubmit={this.onSubmitForm}
        className="upload-product-form-container"
      >
        <h1>Upload a new Product</h1>
        <div className="upload-product-form">
          <ProductNameAndBrandInput
            updateProductName={this.updateProductName}
            updateProductBrand={this.updateProductBrand}
          />
          <ProductsCategoryOptions
            updateProductCategory={this.updateProductCategory}
          />
          <ProductQtyAndPrice
            updateProductPrice={this.updateProductPrice}
            updateProductQuantity={this.updateProductQuantity}
          />
          <ProductDiscount updateProductDiscount={this.updateProductDiscount} />
          <ProductDescription
            updateProductDescription={this.updateProductDescription}
          />
          <CloudinaryUploadWidget
            onUpload={this.onUpload}
            productDetails={{
              brandName: productBrand,
              productName: productName,
              productCategory: productCategory,
              productQuantity: productQuantity,
              productPrice: "Rs " + productPrice,
              productDiscount: productDiscount,
              productDescription: productDescription,
            }}
            emptyState={this.emptyState}
          />
          {showApiFailureMessage && (
            <p className="error-message-upload">{ApiErrorMessage}</p>
          )}
          {showApiSuccessMessage && (
            <p className="product-upload-success-text">{ApiSuccessMessage}</p>
          )}
        </div>
      </form>
    );
  };

  render() {
    const { webPageStatus } = this.state;
    switch (webPageStatus) {
      case pageStatus.success:
        return this.renderUploadProductForm();
      case pageStatus.inProgress:
        return <RenderLoadingView />;
      case pageStatus.failure:
        return <RenderFailureView />;
      default:
        return null;
    }
  }
}

export default AdminUploadProductPage;
