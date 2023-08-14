import { BsFillLightningChargeFill } from "react-icons/bs";
import "./index.css";

const DeliveryPromise = () => {
  return (
    <div className="brand-container">
      <h1>DRAG</h1>
      {/* <p>
            Delivery in <br /> <BsFillLightningChargeFill /> 10 Mins
          </p> */}
      <div className="delivery-time-container">
        <p>Delivery in</p>
        <div className="delivery-time-icon">
          <BsFillLightningChargeFill className="lightning-icon" />
          <p>10 Mins</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPromise;
