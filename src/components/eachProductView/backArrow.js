import { BiArrowBack } from "react-icons/bi";
import { withRouter } from "react-router-dom";

const BackArrow = (props) => {
  const onClickBackArrow = () => {
    const { history } = props;
    history.goBack();
  };

  return (
    <button onClick={onClickBackArrow} className="arrow-button" type="button">
      <BiArrowBack />
    </button>
  );
};

export default withRouter(BackArrow);
