import { useState, useEffect } from 'react';

export default () => {
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

	return [ lat, errorMessage ];
};
