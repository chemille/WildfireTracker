import React, { useEffect, useState } from 'react';
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

  const getCoordinates = async () => {
    let response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${selectedLocation}&lang=en&filter=countrycode:us&limit=4&format=json&apiKey=KEY`)
    let coordinatesArr = [response.data.results[0].lat, response.data.results[0].lon]
    return coordinatesArr
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let coordinates = await getCoordinates();
    console.log('coordinates:', coordinates)

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
      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        value={location}
        onChange={(e) => handleInputChange(e.target.value)}
      />

      <ul>
        {suggestions.map((suggest, index) => (
          <li key={index} onClick={() => handleSelectLocation(suggest)}>
            {suggest}
          </li>
        ))}
      </ul>

      <button type="submit">Submit</button>
    </div>
  );
};



export default LocationForm;