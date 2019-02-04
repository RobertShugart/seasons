import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    //This is the only time we do direct assignment.
    this.state = { lat: null }; // If we don't know what the value of a number will be, use null unitl we know.

    //Find users physical location with geolocation api in all browsers
    window.navigator.geolocation.getCurrentPosition(
      //success call back-found location
      position => {
        this.setState({ lat: position.coords.latitude }); //Used setState we found in
      },
      //Failure call back
      err => console.log(err)
    );
  }

  //React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
