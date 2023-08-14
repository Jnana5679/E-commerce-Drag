import NavigationBar from "../NavBar/navigationBar";
import SearchBar from "../SearchBar/index";
import DeliveryPromise from "../deliveryPromise";
import SalesBanner from "../salesBanner";
import CategoryItemsList from "../categoryitemsList";
import UnlockMegaSavings from "./unlockMegaSavingsButton";

const RenderSuccessView = () => {
  return (
    <>
      <NavigationBar />
      <SearchBar />
      <DeliveryPromise />
      <SalesBanner />
      <UnlockMegaSavings />
      <div className="deals-of-the-day">
        <hr />
        <h1>Deals Of The Day</h1>
        <hr />
      </div>
      <div>
        <CategoryItemsList />
      </div>
    </>
  );
};

export default RenderSuccessView;
