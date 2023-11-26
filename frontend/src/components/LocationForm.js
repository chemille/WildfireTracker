// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
// import '@geoapify/geocoder-autocomplete/styles/minimal.css';

// const LocationForm = () => {
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // This will run every time selectedLocation changes
//     console.log('Selected location changed:', selectedLocation);
    
//     // Save to local storage
//     localStorage.setItem('selectedLocation', JSON.stringify(selectedLocation));
    
//     // Retrieve from local storage
//     const storedLocation = JSON.parse(localStorage.getItem('selectedLocation'));
//     console.log('Stored location:', storedLocation);
//   }, [selectedLocation]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted with selected location:', selectedLocation);
//   };

//   const handleChange = (e) => {
//     let selected = e.target.value;
//     console.log('selected', selected);
    
//     try {    
//       setSelectedLocation(selected);
//       console.log('Updated selected location:', selected);

//       if (!selected) {
//         console.error('Location is empty. Please enter a valid location.');
//         return;
//       }

//       // Redirect to the map page with the selected location
//       navigate(`/map?location=${selected.properties.formatted}`);
//     } catch (error) {
//       console.error('Error handling form submission:', error);
//     }
//   };

//   console.log('Render form with selected location:', selectedLocation);

//   return (
//     <GeoapifyContext apiKey="YOUR_API_KEY">
//       <form onSubmit={handleSubmit}>
//         <GeoapifyGeocoderAutocomplete
//           placeholder="Type a location"
//           onChange={handleChange}
//           value={selectedLocation}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </GeoapifyContext>
//   );
// };

// export default LocationForm;

//////////////// Hard-coded Atlanta, GA to get coordinates through Axios ///////////////
//// This is printing out the latitude and longitude for Atlanta so far!! //////////// 
// import axios from 'axios';
// import { useState } from 'react';

// let setLocation = "Atlanta, GA";

// const LocationForm = () => {
//   const [latitude, setLatitude] = useState('')
//   const [longitude, setLongitude] = useState('')
//   const getCoordinates = () => {
//         axios.get(`https://api.geoapify.com/v1/geocode/autocomplete?text=${setLocation}&format=json&apiKey=YOUR_API_KEY`)
//     .then(res => {
//       console.log(res.data.results[0]) 
//       setLatitude(res.data.results[0].lat)   
//       setLongitude(res.data.results[0].lon)   
//     }).catch(err => {
//         console.log(err)
//     })
//   }
//   return (
//     <div>
//           <button onClick={getCoordinates}>Get Coordinates</button>
//           { latitude && <p>lat: {latitude}</p>}
//           { longitude && <p>lon: {longitude}</p>}
//     </div>
//   );
// };

// export default LocationForm;

/////////////////////////// Tazmeen's preprocesHook code ////////////
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
// import '@geoapify/geocoder-autocomplete/styles/minimal.css';

// const { REACT_APP_GEOAPIFY_API_KEY } = process.env;

// const LocationForm = () => {
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   function handleSelect(value) {
//     console.log('value:', value)
//     setSelectedLocation(value)
//     return selectedLocation
//   }

//   return (
//     <GeoapifyContext apiKey={REACT_APP_GEOAPIFY_API_KEY}>
//       {/* <form> */}
//       {/* <input placeholder="Type a location" type="text" name="location" autoComplete='on' /> */}

//       <GeoapifyGeocoderAutocomplete
//         limit={8}
//         preprocessHook={handleSelect}
//       />
//       <button onClick="submit">Submit</button>
//       {/* </form> */}
//     </GeoapifyContext>
//   );
// };

// export default LocationForm;

//////////// Attempting again ////////////

// import React, { useState } from 'react';
// import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
// import '@geoapify/geocoder-autocomplete/styles/minimal.css';

// const { REACT_APP_GEOAPIFY_API_KEY } = process.env;

// const LocationForm = () => {
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   function handleSelect(value) {
//     console.log('value:', value);
//     setSelectedLocation(value);
//     // return setSelectedLocation;
//   }

//   return (
//     <GeoapifyContext apiKey={REACT_APP_GEOAPIFY_API_KEY}>
//       <GeoapifyGeocoderAutocomplete
//         limit={8}
//         placeholder="Enter Your City, State..."
//         preprocessHook={handleSelect}
//       />
//       <button onClick={() => onSubmit(selectedLocation)}>Submit</button>
//     </GeoapifyContext>
//   );
// };

// export default LocationForm;

///////////////////////// Tazmeen got it working!!!! ///////////////////////
import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import axios from 'axios';

const { REACT_APP_GEOAPIFY_API_KEY } = process.env;

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
    
    let response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${selectedLocation}&lang=en&limit=4&format=json&apiKey=${ REACT_APP_GEOAPIFY_API_KEY }`);
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
    <GeoapifyContext apiKey={ REACT_APP_GEOAPIFY_API_KEY }>
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
