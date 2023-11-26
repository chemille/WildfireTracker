//////////////// Hard-coded Atlanta, GA to get coordinates through Axios ///////////////
//// This is printing out the latitude and longitude for Atlanta so far!! //////////// 
import axios from 'axios';
import { useState } from 'react';

const { REACT_APP_GEOAPIFY_API_KEY } = process.env;

let setLocation = "Atlanta, GA";

const LocationForm = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')

  const getCoordinates = () => {
        axios.get(`https://api.geoapify.com/v1/geocode/search?text=${setLocation}&format=json&apiKey=${REACT_APP_GEOAPIFY_API_KEY}`)
    .then(res => {
      console.log(res.data.results[0]) 
      setLatitude(res.data.results[0].lat)   
      setLongitude(res.data.results[0].lon)   
    }).catch(err => {
        console.log(err)
    })
  }
  return (
    <div>
          <button onClick={getCoordinates}>Get Coordinates</button>
          { latitude && <p>lat: {latitude}</p>}
          { longitude && <p>lon: {longitude}</p>}
    </div>
  );
};

export default LocationForm;