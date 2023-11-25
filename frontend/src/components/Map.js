import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => { // takes in a prop and destructure
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key:{KEY}, language: "en" }} // bootstrapURLKeys takes 2 curly braces because it's an object prop, and you have 2 keys/values
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
    zoom: 7 // set level number. Higher the number, the more zoom in on the map.
}

export default Map;



