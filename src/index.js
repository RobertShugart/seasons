import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
	const [ lat, setLat ] = useState(null);
	const [ errorMessage, setErrorMessage ] = useState('');

	useEffect(() => {
		//Find users physical location with geolocation api in all browsers
		window.navigator.geolocation.getCurrentPosition(
			//success call back-found location
			(position) => setLat(position.coords.latitude),
			//Failure call back
			(err) => setErrorMessage(err.message)
		);
	}, []);

	let content;
	if (errorMessage) {
		content = <div>Error: {errorMessage}</div>;
	} else if (lat) {
		content = <SeasonDisplay lat={lat} />;
	} else {
		content = <Spinner message="Please accept location request" />;
	}

	return <div className="border-red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector('#root'));
