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

import "./App.css";

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
