import React from "react"
import '../styles/locationInfoBox.css'
import axios from "axios"
import ResourceInfoBox from "./ResourceInfoBox"
import { useState } from "react"

const LocationInfoBox = ({ title, lat, lng, onClose }) => {
    const [resources, setResources] = useState(null)

    const safeHavenApiCall = async () => {
        const shelters = await axios.get(`https://api.geoapify.com/v2/places?categories=service.social_facility.shelter,building.place_of_worship,education.library,education.school&filter=circle:${lng},${lat},32000&apiKey=${process.env.REACT_APP_GEOAPIFY_PLACES_KEY}`);
        const shelterArr = []
        for (let i = 0; i < shelters.data.features.length; i++){
            console.log(shelters.data.features[i].properties.formatted)
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
            console.log(hotels.data.features[i].properties.formatted)
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
        console.log(hospitals.data)
        for (let i = 0; i < hospitals.data.features.length; i++) {
            console.log(hospitals.data.features[i].properties.formatted)
            if (hospitals.data.features[i].properties.formatted && hospitals.data.features[i].properties.datasource.raw.website) {
                hospitalArr.push([hospitals.data.features[i].properties.formatted, hospitals.data.features[i].properties.datasource.raw.website])
            } else if (hospitals.data.features[i].properties.formatted && !hospitals.data.features[i].properties.datasource.raw.website) {
                hospitalArr.push([hospitals.data.features[i].properties.formatted])
            }
        }
        setResources(hospitalArr)
    }
    
    console.log('resources', resources);

    return (
        <div className="location-info">
            <div className="X" onClick={() => onClose()}>X</div>
            <div><strong>{title}</strong></div>
            <div>
                <span>Resources</span>
                <ul onClick={() => safeHavenApiCall()}>Safe Havens</ul>
                <ul onClick={() => hotelApiCall()}>Hotels</ul>
                <ul onClick={() => hospitalApiCall()}>Hospitals</ul>
            </div>

            {resources && (<ResourceInfoBox resourcesList={resources}></ResourceInfoBox>)}

        </div>
    )
}

export default LocationInfoBox

