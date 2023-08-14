import { AiOutlineClose } from "react-icons/ai";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";

const CloseCrossSign = (props) => {
  const onClickCrossSign = () => {
    const { history } = props;
    history.replace("/");
  };

  return (
    <div className="cross-sign">
      <button type="button" onClick={onClickCrossSign}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default withRouter(CloseCrossSign);
