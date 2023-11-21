// // LocationForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const LocationForm = () => {
//   const [location, setLocation] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const handleInputChange = async (value) => {
//     setLocation(value);

//     try {
//       const response = await axios.get(
//         `https://api.geoapify.com/v1/autocomplete?text=${value}&apiKey=YOUR_GEOAPIFY_API_KEY`
//       );

//       // Extract suggestions from the response
//       const newSuggestions = response.data.features.map((feature) => feature.properties.formatted);
//       setSuggestions(newSuggestions);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   const handleSelectLocation = (selectedLocation) => {
//     setLocation(selectedLocation);
//     setSuggestions([]);
//   };

//   return (
//     <div>
//       <label htmlFor="location">Location:</label>
//       <input
//         type="text"
//         id="location"
//         value={location}
//         onChange={(e) => handleInputChange(e.target.value)}
//       />

//       <ul>
//         {suggestions.map((suggest, index) => (
//           <li key={index} onClick={() => handleSelectLocation(suggest)}>
//             {suggest}
//           </li>
//         ))}
//       </ul>

//       <button type="submit">Submit</button>
//     </div>
//   );
// };

// export default LocationForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const LocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (location) => {
    console.log('Selected location:', location);
    setSelectedLocation(location);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (!selectedLocation) {
        console.error('Location is empty. Please enter a valid location.');
        return;
      }

      // Redirect to the map page with the selected location
      navigate(`/map?location=${selectedLocation.properties.formatted}`);
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };

  console.log('Render form with selected location:', selectedLocation);

  return (
    <GeoapifyContext apiKey="API_KEY">
      <form onSubmit={handleSubmit}>
        <GeoapifyGeocoderAutocomplete
          placeholder="Type a location"
          onSelect={handleSelect}
        />
        <button type="submit">Submit</button>
      </form>
    </GeoapifyContext>
  );
};

export default LocationForm;