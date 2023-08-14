import { Component } from "react";

import RenderSuccessView from "./renderSuccessView";
import RenderLoadingView from "../../additionalContent/renderLoadingView";
import RenderFailureView from "../../additionalContent/renderFailurePage";

import "./index.css";

const pageStatus = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class LandingPage extends Component {
  state = { webPageStatus: pageStatus.initial };

  componentDidMount = () => {
    this.setState({ webPageStatus: pageStatus.inProgress });
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

  renderHomePage = () => {
    const { webPageStatus } = this.state;

    switch (webPageStatus) {
      case pageStatus.success:
        return <RenderSuccessView />;
      case pageStatus.inProgress:
        return <RenderLoadingView />;
      case pageStatus.failure:
        return <RenderFailureView />;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="landing-page-container">{this.renderHomePage()}</div>
    );
  }
}

export default LandingPage;
