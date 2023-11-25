import GoogleMapReact from 'google-map-react'
import { useLocation } from 'react-router-dom';

// Inside your component

const Map = ({ center, zoom }) => { // takes in a prop and destructure
    const location = useLocation();
    const { coordinates } = location.state; 
    if (!coordinates) {
        alert('Could not find coordinates for selected location, please try again')
    }

    center = {
        lat: coordinates[0], 
        lng: coordinates[1] 
    }
    zoom = 10

    return (
        <div style={{ height: '70vh', width: '70%', margin:'10px' }} className="map" >
            <GoogleMapReact
                bootstrapURLKeys={{ key: "KEY" }} // bootstrapURLKeys takes 2 curly braces because it's an object prop, and you have 2 keys/values
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    )


}

// Set default props
Map.defaultProps = {
    center: {
        lat: 40.73, // hard-code example lat of NYC
        lng: -73.93 // hard-code example lng of NYC
    },
    zoom: 11 // set level number. Higher the number, the more zoom in on the map.
}

export default Map;



