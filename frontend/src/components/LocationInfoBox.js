import React from "react"
import '../styles/locationInfoBox.css'
import axios from "axios"
import ResourceInfoBox from "./ResourceInfoBox"
import { useState } from "react"
import RedCrossTips from "./RedCrossTips"

const LocationInfoBox = ({ title, lat, lng, onClose }) => {
    const [resources, setResources] = useState(null)
    const [showRedCrossTips, setShowRedCrossTips] = useState(false);

    const toggleRedCrossTips = () => {
        setShowRedCrossTips(!showRedCrossTips);
      };

    const safeHavenApiCall = async () => {
        const shelters = await axios.get(`https://api.geoapify.com/v2/places?categories=service.social_facility.shelter,building.place_of_worship,education.library,education.school&filter=circle:${lng},${lat},32000&apiKey=${process.env.REACT_APP_GEOAPIFY_PLACES_KEY}`);
        const shelterArr = []
        for (let i = 0; i < shelters.data.features.length; i++){
            if (shelters.data.features[i].properties.formatted && shelters.data.features[i].properties.datasource.raw.website) {
                shelterArr.push([shelters.data.features[i].properties.formatted, shelters.data.features[i].properties.datasource.raw.website])
            } else if (shelters.data.features[i].properties.formatted && !shelters.data.features[i].properties.datasource.raw.website) {
                shelterArr.push([shelters.data.features[i].properties.formatted])
            }
        }
        setResources(shelterArr)

    }

    const hotelApiCall = async () => {
        const hotels = await axios.get(`https://api.geoapify.com/v2/places?categories=accommodation.hotel,accommodation.motel&filter=circle:${lng},${lat},32000&apiKey=${process.env.REACT_APP_GEOAPIFY_PLACES_KEY}`);
        const hotelArr = []
        for (let i = 0; i < hotels.data.features.length; i++) {
            if (hotels.data.features[i].properties.formatted && hotels.data.features[i].properties.datasource.raw.website) {
                hotelArr.push([hotels.data.features[i].properties.formatted, hotels.data.features[i].properties.datasource.raw.website])
            } else if (hotels.data.features[i].properties.formatted && !hotels.data.features[i].properties.datasource.raw.website) {
                hotelArr.push([hotels.data.features[i].properties.formatted])
            }
        }
        setResources(hotelArr)
    }

    const hospitalApiCall = async () => {
        const hospitals = await axios.get(`https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lng},${lat},32000&apiKey=${process.env.REACT_APP_GEOAPIFY_PLACES_KEY}`);
        const hospitalArr = []
        for (let i = 0; i < hospitals.data.features.length; i++) {
            if (hospitals.data.features[i].properties.formatted && hospitals.data.features[i].properties.datasource.raw.website) {
                hospitalArr.push([hospitals.data.features[i].properties.formatted, hospitals.data.features[i].properties.datasource.raw.website])
            } else if (hospitals.data.features[i].properties.formatted && !hospitals.data.features[i].properties.datasource.raw.website) {
                hospitalArr.push([hospitals.data.features[i].properties.formatted])
            }
        }
        setResources(hospitalArr)
    }

    return (
        <div className="location-info">
            <button className="close-button" onClick={() => onClose()}>X</button>
            <div className="title"><strong>{title}</strong></div>
            <div className="resources-section">
                <span>Resources</span>
                <button className="buttons" onClick={() => safeHavenApiCall()}>Safe Havens</button>
                <button className="buttons" onClick={() => hotelApiCall()}>Hotels</button>
                <button className="buttons" onClick={() => hospitalApiCall()}>Hospitals</button>
            </div>

            {resources && (<ResourceInfoBox resourcesList={resources}></ResourceInfoBox>)}
            <div>
        <button className = "toggle-tips-button" onClick={toggleRedCrossTips}>
          {showRedCrossTips ? "Hide Red Cross Tips" : "Show Red Cross Tips"}
        </button>
      </div>
      {showRedCrossTips && <RedCrossTips />}
    </div>

    )
}

export default LocationInfoBox


