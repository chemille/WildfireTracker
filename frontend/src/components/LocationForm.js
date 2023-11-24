import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';


const LocationForm = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  //const navigate = useNavigate();


  function handleSelect(value) {
    console.log(value)
    setSelectedLocation(value)
    return selectedLocation
  }

  // const handleSelect = (e) => {
  //   e.preventDefault(); 
  //   let userLocation = e.target.classList;
  //   // let location = userInput
  //   setSelectedLocation(userLocation);
  //   console.log(selectedLocation)
  // };

  const getCoordinates = async () => {
    await fetch("https://api.geoapify.com/v1/geocode/search?text=Hartford&lang=en&limit=4&format=json&apiKey=GEOAPIFY_KEY")
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  const handleSubmit2 = (value) => {
    try {
      console.log(value)
      setSelectedLocation(value)
      //console.error('Location is empty. Please enter a valid location.');
      //return;
      //getCoordinates()
      // Redirect to the map page with the selected location
      //navigate(`/map?location=${selectedLocation.properties.formatted}`);
      console.log('success')
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };


  const handleSubmit = (location) => {
    //event.preventDefault();
    //console.log(event.target.value)


    try {
      //if (!selectedLocation) {
      console.log(selectedLocation);
      handleSelect(selectedLocation);


      //console.error('Location is empty. Please enter a valid location.');
      //return;


      getCoordinates()
      // Redirect to the map page with the selected location
      //navigate(`/map?location=${selectedLocation.properties.formatted}`);
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };


  console.log('Render form with selected location:', selectedLocation);

  return (
    <GeoapifyContext apiKey='GEOAPIFY_CONTEXT_KEY'>
      {/* <form> */}
      {/* <input placeholder="Type a location" type="text" name="location" autoComplete='on' /> */}

      <GeoapifyGeocoderAutocomplete
        limit={8}
        preprocessHook={handleSelect}
      />
      <button type="submit">Submit</button>
      {/* </form> */}
    </GeoapifyContext>
  );
};


export default LocationForm;