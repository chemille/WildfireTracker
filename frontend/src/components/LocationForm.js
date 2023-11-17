// LocationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LocationForm = () => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (city) => {
    setLocation(city);

    try {
    let cityInput = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&format=json&apiKey=INSERT_API_KEY`);
    let response = await cityInput.json();
    console.log(response)
    } catch (err) {
      console.log(err);
    }
    
    // .then(response => response.json())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error)); 
  }
  

  // const handleInputChange = async (value) => {
  //   setLocation(value);

    // try {
    //   // const response = await axios.get(



    //     await axios.get(
    //     `https://api.geoapify.com/v1/autocomplete?text=${value}&apiKey=20bd853d6c3b4e25a263fb62ddf8101b`
    //   );
    //     console.log("success");
    //   // Extract suggestions from the response
    //   // const newSuggestions = response.data.features.map((feature) => feature.properties.formatted);
    //   // setSuggestions(newSuggestions);
    // } catch (error) {
    //   console.error('Error fetching suggestions:', error);
    // }
  // };

  const handleSelectLocation = (selectedLocation) => {
    setLocation(selectedLocation);
    setSuggestions([]);
  };

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


//Create the popup that shows the location is autofilling based on the value, from there they will get the selected resources