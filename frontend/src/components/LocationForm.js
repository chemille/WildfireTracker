// LocationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LocationForm = () => {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (value) => {
    setLocation(value);

    try {
      const response = await axios.get(
        `https://api.geoapify.com/v1/autocomplete?text=${value}&apiKey=20bd853d6c3b4e25a263fb62ddf8101b`
      );

      // Extract suggestions from the response
      const newSuggestions = response.data.features.map((feature) => feature.properties.formatted);
      setSuggestions(newSuggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

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
