import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" }; // If we don't know what the value of a number will be, use null and the value will be passed in once it is determined.

  componentDidMount() {
    //Find users physical location with geolocation api in all browsers
    window.navigator.geolocation.getCurrentPosition(
      //success call back-found location
      position => this.setState({ lat: position.coords.latitude }),
      //Failure call back
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  //React says we have to define render!!
  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
