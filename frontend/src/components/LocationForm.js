import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import axios from 'axios';
import '../styles/locationForm.css';

const LocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  function handleSelect(value) {
    console.log(value)
    setSelectedLocation(value)
    return selectedLocation
  }

  const getCoordinates = async () => {
    let response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${selectedLocation}&lang=en&limit=4&format=json&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`)
    let coordinatesArr = [response.data.results[0].lat, response.data.results[0].lon]
    return coordinatesArr
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    let coordinates = await getCoordinates();

    try {
      if (selectedLocation && coordinates) {
        // Redirect to the map page with the selected location
        navigate(`/map?location=${selectedLocation}`, { state: { coordinates } });

      } else if (!selectedLocation) {
        alert('Invalid location selected:', selectedLocation);
        console.error('Invalid location selected:', selectedLocation);
      } else if (!coordinates) {
        alert('Could not find coordinates for selected location, please try again')
      }
    } catch (error) {
      alert('Error handling form submission. please try again');
      console.error('Error handling form submission:', error);
    }
  };


  console.log('Render form with selected location:', selectedLocation);

  return (
    <div>
      <h1>Wildfire Watchtower</h1>
      <p>According to the National Interagency Fire Center (NIFC), there have been 53,070 wildfire incidents and 2,584,377 acres burned year-to-date.  
      Wildfire Watchtower was created to help individuals check for wildfires nearby and offer community resources for those affected by wildfire activity.</p>
      <p>Please type in your location (e.g., City, State). It will take you to a map with wildfire markers that you can click for more information.</p>
    
    <GeoapifyContext apiKey={process.env.REACT_APP_GEOAPIFY_CONTEXT_KEY} >
      <form onSubmit={handleSubmit}>
        <GeoapifyGeocoderAutocomplete
          limit={5}
          preprocessHook={handleSelect}
        />
        <button type="submit">Submit</button>
      </form>
    </GeoapifyContext>
    </div>
  );
};


export default LocationForm;