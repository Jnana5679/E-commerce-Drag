import { Component } from "react";

class ProductItemView extends Component {
  state = { productDetails: [] };

  componentDidMount = () => {
    const { location, match } = this.props;
    const { params } = match;
    const { search } = location;
    const { id1 } = params;
    this.getProductDetailsApiCall(search.slice(12));
  };

  getProductDetailsApiCall = async (search) => {
    let getProductApi;
    if (window.innerWidth < 600) {
      getProductApi = `http://192.168.1.11:3005/get-product-by-name?product_id=${search}`;
    } else {
      getProductApi = `http://localhost:3005/get-product-by-name?product_id=${search}`;
    }
    const options = {
      mathod: "GET",
    };
    const response = await fetch(getProductApi, options);
    const data = await response.json();
    this.setState({ productDetails: data["productDetails"][0] });
  };

  render() {
    const { productDetails } = this.state;
    const {
      brandName,
      productCategory,
      productDescription,
      productDiscount,
      productImageUrls,
      productName,
      productPrice,
      productQuantity,
    } = productDetails;
    console.log(productImageUrls);
    return (
      <div>
        <div>
          <h1>{productName}</h1>
        </div>
        <div>
          <p>{brandName}</p>
        </div>
      </div>
    );
  }
}

export default ProductItemView;
