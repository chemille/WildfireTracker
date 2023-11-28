import React from "react"
import './styles/locationInfoBox.css'

const LocationInfoBox = ({ title, lat, lng, onClose }) => {
    return (
        <div className="location-info">
            <div className="X" onClick={() => onClose()}>X</div>
            <div><strong>{title}</strong></div>
            <div>
                <span>Resources</span>
                <ul>Hotels</ul>
                <ul>Hospitals</ul>
            </div>
            
        </div> 
    )
}

export default LocationInfoBox