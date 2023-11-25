import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import axios from 'axios';


const LocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();
 
  function handleSelect(value) {
    console.log(value)
    setSelectedLocation(value)
    return selectedLocation
  }

  const getCoordinates = async (e) => {
    e.preventDefault()
    
    let response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${selectedLocation}&lang=en&limit=4&format=json&apiKey={KEY}`);
    let latitude = response.data.results[0].lat
    let longitude = response.data.results[0].lon
    return ([latitude, longitude])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  
    try {
      if (selectedLocation) {
        // Redirect to the map page with the selected location
        navigate(`/map?location=${selectedLocation}`);
      } else {
        console.error('No or invalid location selected:', selectedLocation);
      
      }
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };


  console.log('Render form with selected location:', selectedLocation);

  return (
    <GeoapifyContext apiKey={KEY}>
      <form onSubmit={handleSubmit}>
      {/* <input placeholder="Type a location" type="text" name="location" autoComplete='on' /> */}

      <GeoapifyGeocoderAutocomplete
          limit={5}
          preprocessHook={handleSelect}
      />
      <button type="submit">Submit</button>
      </form>
    </GeoapifyContext>
  );
};


export default LocationForm;