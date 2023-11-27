import GoogleMapReact from 'google-map-react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import WildFireMarker from './WildFireMarker';

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

    let wildFires = [["new york", -73.93, 40.73], ["west hartford", -72.7420399, 41.7620447 ]];
    
    const wildFireLocations = async (e) => {
        e.preventDefault()
        
        let response = await axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events?&status=open");
        for (let i = 0; i < response.data.events.length; i++){
            // console.log(response.data.events[i])
            if (response.data.events[i].categories[0].id === 8) {
                // console.log(response.data.events[i].geometries[0].coordinates)
                wildFires[response.data.events[i].title, response.data.events[i].id] = response.data.events[i].geometries[0].coordinates
            }

        }
        // for (let key in wildFires) {
        //     console.log(wildFires[key][0])
        // }
        console.log(wildFires)
        return wildFires     
    }
    
   
    
    // const Markers = () => {
    //     // let wildFireFunc = await wildFireLocations();
        
    //     for (let key in wildFires) {
    //         console.log(wildFires[key][0])
    //         console.log(<WildFireMarker lat={wildFires[key][1]} lng={wildFires[key][0]} onClick={() => { console.log(key) }} />)
    //     }
    //     // if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
    //     //     return <WildFireMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    //     // }
    //     // return null
    //     // return <WildFireMarker lat={41.7620447} lng={-72.7420399} onClick={() => { console.log('hellooo') }} />
    // }

    const Markers = () => {
        return wildFires.map((fire, index) => (
            <WildFireMarker
                key={index}
                lat={fire[2]} // Latitude is the third item in the sub-array
                lng={fire[1]} // Longitude is the second item
                onClick={() => { console.log(fire) }} // Logging the location name, which is the first item
            />
        ));
    }

    return (

        <div style={{ height: '70vh', width: '70%', margin: '10px' }} className="map" >
            <GoogleMapReact
                bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_KEY}` }} // bootstrapURLKeys takes 2 curly braces because it's an object prop, and you have 2 keys/values
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Markers />
                {/* <WildFireMarker lat={40.73} lng={-73.93} onClick={() => { console.log('nyc coordinates') }} />  */}

            </GoogleMapReact>
            <button type="submit" onClick={wildFireLocations}>Submit</button>
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



