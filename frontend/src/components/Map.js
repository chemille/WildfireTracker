import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import WildFireMarker from "./WildFireMarker";
import { useLocation } from "react-router-dom";

const {REACT_APP_GMAPS_API_KEY} = process.env

const Map = () => {

  const location = useLocation();
  const { coordinates } = location.state;
  const [center, setCenter] = useState({
    lat: coordinates[0],
    lng: coordinates[1],
  });

  const [zoom, setZoom] = useState(7.5);
  const [wildFires, setWildFires] = useState([]);

  const fetchWildFires = async () => {
    try {
      const response = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v2.1/events?&status=open"
      );
      const newWildFires = response.data.events
        .filter((ev) => ev.categories[0].id === 8 && ev.geometries.length > 0)
        .map((ev) => ({
          title: ev.title,
          lat: ev.geometries[0].coordinates[1],
          lng: ev.geometries[0].coordinates[0],
        }));

      console.log("New Wildfires:", newWildFires);
      setWildFires(newWildFires);
    } catch (error) {
      console.error("Error fetching natural disasters:", error);
    }
  };

  const renderMarkers = () => {
    console.log("WildFires in renderMarkers:", wildFires);
  
    return wildFires.map((fire, index) => (
      <WildFireMarker
        key={index}
        lat={fire.lat}
        lng={fire.lng}
        onClick={() => {
          console.log(fire.title);
        }}
      />
    ));
  };

  useEffect(() => {
    console.log("Component mounted");
    fetchWildFires();
  }, []);

  return (
    <div
      // style={{ height: "70vh", width: "70%", margin: "10px" }}
      className="map"
    >
      <GoogleMapReact
        key={JSON.stringify(wildFires)} // Update key when wildFires change
        bootstrapURLKeys={{ key: REACT_APP_GMAPS_API_KEY }}
        center={center}
        zoom={zoom}
        draggable={false} 
        options={{ zoomControl: false }}
        onChange={({ center, zoom }) => {
          // Uncomment the following lines if you want to update center and zoom
          setCenter(center);
          setZoom(zoom);
        }}
      >
        {renderMarkers()}
      </GoogleMapReact>
      <button type="submit" onClick={fetchWildFires}>
        Reload Wildfires
      </button>
    </div>
  );
};

export default Map;