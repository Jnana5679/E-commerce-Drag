import { Link } from "react-router-dom";
import { Component } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class SuccessfullUserRegistration extends Component {
  state = { timerSeconds: 0 };

  componentDidMount() {
    let seconds = 0;
    const timer = setInterval(() => {
      if (seconds >= 5) {
        clearInterval(timer);
      } else {
        seconds += 1;
        this.setState({ timerSeconds: seconds });
      }
    }, 1000);
  }

  render() {
    const { timerSeconds } = this.state;
    if (timerSeconds === 5) {
      return <Redirect to="/customer/Login" />;
    }
    return (
      <div className="success-registration-page">
        <h1>User Registerd Successfully</h1>
        <p>
          Please wait <span>{timerSeconds}</span> Seconds... to redirect{" "}
        </p>
        <p>
          Or Click{" "}
          <span>
            <Link to="/customer/Login" className="link">
              Here
            </Link>
          </span>{" "}
          to redirect to Login Page
        </p>
      </div>
    );
  }
}

export default SuccessfullUserRegistration;
