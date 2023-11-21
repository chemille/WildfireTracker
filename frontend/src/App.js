// import React from "react";
// import "./App.css";
// import LocationForm from "./components/LocationForm";

// function App() {
//   return (
//     <div>
//       <h1>Wildfire Tracker</h1>
//       <LocationForm />
//     </div>
//   );
// }

// export default App;
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import Map from './components/Map';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';

const App = () => {
  return (
    <Router>
      <GeoapifyContext apiKey="API_KEY">
        <Routes>
          <Route path="/" element={<LocationForm />} />
          {/* <Route path="/map" element={<Map />} /> */}
        </Routes>
      </GeoapifyContext>
    </Router>
  );
};

export default App;
