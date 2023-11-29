import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";
import WildFireMarker from "./WildFireMarker";
import { useLocation } from "react-router-dom";
import LocationInfoBox from "./LocationInfoBox";
import '../styles/map.css'

const Map = () => {

  const location = useLocation();
  const { coordinates } = location.state;
  const [center, setCenter] = useState({
    lat: coordinates[0],
    lng: coordinates[1],
  });
  const [clicked, setClicked] = useState(null)

  const [zoom, setZoom] = useState(7);
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
  const closeInfoBox = () => {
    setClicked(null);
  }

  const renderMarkers = () => {
    return wildFires.map((fire, index) => (
      <WildFireMarker
        key={index}
        lat={fire.lat}
        lng={fire.lng}
        onClick={() => {
          setClicked({ "title": fire.title, "latitude": fire.lat, "longitude": fire.lng })
        }}
      />
    ));
  };

  useEffect(() => {
    fetchWildFires();
  }, []);

  console.log("Current clicked state:", clicked);

  return (
    <div
      className="map"
    >
      <GoogleMapReact
        key={JSON.stringify(wildFires)} // Update key when wildFires change
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_KEY}` }}
        center={center}
        zoom={zoom}
        draggable={(false)}
        options={{ zoomControl: false }}
        onChange={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}
      >
        {renderMarkers()}

      </GoogleMapReact>
      {clicked && (
        <LocationInfoBox
          title={clicked.title}
          lat={clicked.latitude}
          lng={clicked.longitude}
          onClose={closeInfoBox}
        />
      )}

    </div>
  );

};

export default Map;