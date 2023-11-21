import React from "react";
import "./App.css";
import LocationForm from "./components/LocationForm";
import WildfireMap from "./components/WildfireMap";

function App() {
  return (
    <div>
      <h1>Wildfire Tracker</h1>
      <LocationForm />   
      <WildfireMap />
    </div>
  );
}

export default App;
