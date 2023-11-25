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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import Map from './components/Map';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LocationForm />} />
          <Route path="/map" element={<Map />} />
        </Routes>
    </Router>
  );
};

export default App;
