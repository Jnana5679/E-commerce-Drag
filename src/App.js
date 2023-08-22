/* eslint-disable array-callback-return */
import { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import CategoryItemsViewPage from "./components/categoryItemsView";
import CustomerLoginPage from "./components/customerLoginPage/LoginPage";
import CustomerRegistration from "./components/customerRegistartionPage/customerRegistration";
import AdminLoginPage from "./Admin/AdminLoginPage/adminLoginPage";
import SuccessfullUserRegistration from "./components/customerRegistartionPage/successfulUserRegistration";
import AdminLandingPage from "./Admin/AdminLandingPage/adminLandingPage";
import AdminUploadProductPage from "./Admin/AdminUploadProductPage/adminUploadProduct";
import UpdateDeals from "./Admin/AdminUpdateDeals/updateDeals";
import AdminProtectedRoute from "./Admin/AdminProtectedRoute/protectedRoute";
import ProductItemView from "./components/eachProductView/eachProductView";
import CartView from "./components/cart/cartView";
import CouponsSection from "./components/cart/couponsSection";

import CartContext from "./cartContext/cartContext";

import "./App.css";

class App extends Component {
  state = { cartList: [] };

  componentDidMount = () => {
    const productDetailsFromStorage = JSON.parse(
      localStorage.getItem("product-details")
    );

    if (productDetailsFromStorage !== null) {
      this.setState({ cartList: productDetailsFromStorage });
    }
  };

  addCartItem = (productDetailsAddedToCart, productId) => {
    const { cartList } = this.state;

    const getProductByIdInCart = cartList.filter((eachProduct) => {
      if (eachProduct._id === productId) {
        return eachProduct;
      }
    });

    let productsToBeUpdatedToCart = [];

    if (getProductByIdInCart[0] === undefined) {
      this.setState((prevState) => ({
        cartList: [...prevState.cartList, productDetailsAddedToCart],
      }));
      const productDetailsToStorInLocalStorage = [
        ...cartList,
        productDetailsAddedToCart,
      ];
      localStorage.setItem(
        "product-details",
        JSON.stringify(productDetailsToStorInLocalStorage)
      );
    } else {
      localStorage.removeItem("product-details");
      productsToBeUpdatedToCart.push(
        cartList.filter((eachCartItem) => {
          if (eachCartItem._id !== productId) {
            return eachCartItem;
          }
        })
      );
      productsToBeUpdatedToCart[0].push(productDetailsAddedToCart);
      this.setState({ cartList: productsToBeUpdatedToCart[0] });
      localStorage.setItem(
        "product-details",
        JSON.stringify(...productsToBeUpdatedToCart)
      );
    }
  };

  deleteCartItem = (productId) => {
    const { cartList } = this.state;
    const updatedCartList = cartList.filter((eachCartItem) => {
      if (eachCartItem._id !== productId) {
        return eachCartItem;
      }
    });
    this.setState({ cartList: updatedCartList });
    localStorage.removeItem("product-details");
    if (updatedCartList[0] !== undefined) {
      localStorage.setItem("product-details", JSON.stringify(updatedCartList));
    }
  };

  render() {
    const { cartList } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          deleteCartItem: this.deleteCartItem,
        }}
      >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/customer/Login" component={CustomerLoginPage} />
          <Route
            exact
            path="/customer/Registration"
            component={CustomerRegistration}
          />
          <Route exact path="/category/:id" component={CategoryItemsViewPage} />
          <Route exact path="/admin/Login" component={AdminLoginPage} />
          <Route
            exact
            path="/successfull-registration"
            component={SuccessfullUserRegistration}
          />
          <Route exact path="/product/:id1" component={ProductItemView} />
          <Route exact path="/customer/cart-view" component={CartView} />
          <Route
            exact
            path="/customer/apply-coupons-section"
            component={CouponsSection}
          />
          <AdminProtectedRoute
            exact
            path="/admin/Landing-page"
            component={AdminLandingPage}
          />
          <AdminProtectedRoute
            exact
            path="/admin/upload-new-product"
            component={AdminUploadProductPage}
          />
          <AdminProtectedRoute
            exact
            path="/admin/update-deals"
            component={UpdateDeals}
          />
        </Switch>
      </CartContext.Provider>
    );
  }
}

export default App;
