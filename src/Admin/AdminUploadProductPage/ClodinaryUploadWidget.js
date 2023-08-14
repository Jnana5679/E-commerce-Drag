import { Component } from "react";
import Axios from "axios";
import { Progress } from "@chakra-ui/react";
import "./index.css";

class CloudinaryUploadWidget extends Component {
  state = {
    filesUploaded: null,
    progress: 0,
    showProgressBar: false,
    renderPleaseWait: false,
    showDone: false,
    showError: false,
    errorMessage: "",
  };

  fileHandler = (event) => {
    this.setState({ filesUploaded: event.target.files });
  };

  onClickUpload = async () => {
    this.setState({
      showError: false,
      renderPleaseWait: false,
      errorMessage: "",
    });
    const { onUpload, productDetails } = this.props;

    const { filesUploaded } = this.state;

    const {
      brandName,
      productName,
      productCategory,
      productQuantity,
      productPrice,
      productDiscount,
      productDescription,
    } = productDetails;
    if (
      productName === "" ||
      brandName === "" ||
      productCategory === "" ||
      productDescription === "" ||
      productQuantity === "" ||
      productPrice === "" ||
      productDiscount === ""
    ) {
      this.setState({
        showError: true,
        errorMessage: "* All Fields Must Be Filled",
      });
    } else if (
      filesUploaded === "null" ||
      filesUploaded === null ||
      filesUploaded === ""
    ) {
      this.setState({ showError: true, errorMessage: "*No images uploaded" });
    } else {
      var filesUrlObject = {};
      this.setState({ renderPleaseWait: true });

      for (var i = 0; i < this.state.filesUploaded.length; i++) {
        this.setState({ showProgressBar: true });
        let formData = new FormData();
        formData.append("file", this.state.filesUploaded[i]);
        formData.append("upload_preset", "xjzh7i1z");
        const response = await Axios.post(
          "https://api.cloudinary.com/v1_1/dwsedmm9n/image/upload",
          formData,
          {
            onUploadProgress: (ProgressEvent) => {
              this.setState((prevState) => ({
                progress:
                  prevState.progress +
                  Math.round(
                    (ProgressEvent.loaded / ProgressEvent.total) * 100
                  ),
              }));
            },
          }
        );
        filesUrlObject["productImageUrl"] = response.data.secure_url;
        this.setState({ progress: 0, showProgressBar: false });
      }

      this.setState({ showDone: true, renderPleaseWait: false });
      onUpload(filesUrlObject);
    }
  };

  onClickReset = () => {
    const { emptyState } = this.props;
    emptyState();
    this.setState({ showDone: false, showError: false });
  };

  render() {
    const {
      progress,
      showProgressBar,
      showDone,
      showError,
      errorMessage,
      renderPleaseWait,
    } = this.state;
    return (
      <>
        <div className="upload-product-details-input">
          <label htmlFor="uploadImage">Upload Product Image</label>
          <input
            id="uploadImage"
            type="file"
            multiple
            onChange={this.fileHandler}
          />
        </div>
        {showProgressBar && (
          <div>
            <Progress
              value={progress}
              size="xs"
              marginBottom={"20px"}
              borderRadius={"5px"}
              colorScheme="pink"
            />
          </div>
        )}
        <div>
          {renderPleaseWait && <p>Please Wait ...</p>}
          {showDone && (
            <p className="product-upload-success-text">
              Product Uploaded Successfully
            </p>
          )}
        </div>
        <button
          className="upload-product-button"
          type="button"
          onClick={this.onClickUpload}
        >
          Upload
        </button>
        <input
          onClick={this.onClickReset}
          className="reset-button"
          type="reset"
          value="Reset Fields"
        />
        {showError && <p className="error-message-upload">{errorMessage}</p>}
      </>
    );
  }
}

export default CloudinaryUploadWidget;
