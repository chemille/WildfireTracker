// import GoogleMapReact from 'google-map-react'

// const { REACT_APP_GMAPS_API_KEY } = process.env;

// const Map = ({center, zoom}) => { // takes in a prop and destructure
//   return (
//     <div className="map">
//       <GoogleMapReact
//         bootstrapURLKeys={{ REACT_APP_GMAPS_API_KEY }} // bootstrapURLKeys takes 2 curly braces because it's an object prop, and you have 2 keys/values
//         defaultCenter={ center } 
//         defaultZoom={ zoom }
//       >
//       </GoogleMapReact>
//     </div>
//   )
// }

// // Set default props
// Map.defaultProps = {
//   center: {
//     lat: 40.73, // hard-code example lat of NYC
//     lng: -73.93 // hard-code example lng of NYC
//   },
//   zoom: 7 // set level number. Higher the number, the more zoom in on the map.
// }

// export default Map;

////////////////// Taz got it working with the LocationForm component! ////////////////////
// import GoogleMapReact from 'google-map-react'
// import { useLocation } from 'react-router-dom';

// const { REACT_APP_GMAPS_API_KEY } = process.env;

// const Map = ({ center, zoom }) => { // takes in a prop and destructure
//     const location = useLocation();
//     const { coordinates } = location.state; 
//     if (!coordinates) {
//         alert('Could not find coordinates for selected location, please try again')
//     }

//     center = {
//         lat: coordinates[0], 
//         lng: coordinates[1] 
//     }
//     zoom = 10

//     return (
//         <div style={{ height: '70vh', width: '70%', margin:'10px' }} className="map" >
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: REACT_APP_GMAPS_API_KEY }} 
//                 defaultCenter={center}
//                 defaultZoom={zoom}
//             >
//             </GoogleMapReact>
//         </div>
//     )


// }

// // Set default props
// Map.defaultProps = {
//     center: {
//         lat: 40.73, // hard-code example lat of NYC
//         lng: -73.93 // hard-code example lng of NYC
//     },
//     zoom: 11 // set level number. Higher the number, the more zoom in on the map.
// }

// export default Map;


////////// Taz got it to display an icon at the selectedLocation coordinate for now //////
// import GoogleMapReact from 'google-map-react'
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import DisasterMarker from './DisasterMarker';

// const { REACT_APP_GMAPS_API_KEY } = process.env;

// const Map = ({ center, zoom }) => {
//     const location = useLocation();
//     const { coordinates } = location.state; 
//     if (!coordinates) {
//         alert('Could not find coordinates for selected location, please try again')
//     }

//     center = {
//         lat: coordinates[0], 
//         lng: coordinates[1] 
//     }
//     zoom = 10

//     const naturalDisasters = async (e) => {
//       e.preventDefault()
//       let response = await axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events?days=20&source=InciWeb&status=open");
//       console.log(response);
//     }

//   return (

//     <div style={{ height: '70vh', width: '70%', margin: '10px' }} className="map" >
//         <GoogleMapReact
//             bootstrapURLKeys={{ key: REACT_APP_GMAPS_API_KEY }} 
//             defaultCenter={center}
//             defaultZoom={zoom}
//         >
//             <DisasterMarker lat={center.lat} lng={center.lng} />
//         </GoogleMapReact>
//         <button type="submit" onClick={naturalDisasters}>Submit</button>
//     </div>
  
//   )
// }

// export default Map;


////////// Now try to get the NASA API call to work to plot fire icons //////
import GoogleMapReact from 'google-map-react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import DisasterMarker from './DisasterMarker';
import fireMarker from './fireMarker';
// import { useState, useEffect } from 'react';

const { REACT_APP_GMAPS_API_KEY } = process.env;

// Map.js is going pull event data from the props and we'll have access to that arr
const Map = ({ center, zoom }) => {
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
      
      const wildfireData = async (e) => {
        e.preventDefault()
        let response = await axios.get("https://eonet.gsfc.nasa.gov/api/v2.1/events?days=20&status=open");
        console.log('response', response);
        // console.log(response.map(e => {
        //   if(e.categories[0].id ===8) {
        //     return <fireMarker lat={e.geometries[0].coordinates[1]} lng={e.geometries[0].coordinates[0]} />
        //       }
        //       return null
        //   }));
        // console.log(Array.prototype.map.call(response.data.events[0]))
      };
      
      // const naturalDisasters = async (e) => {
        //   e.preventDefault()
        //   const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open')
      //   const { events } = await res.json()

      ////We want multiple fire markers, so loop through the data.
    //   const fireMarkers = response.map(ev => {
    //     if(ev.categories[0].id === 8) {
    //     return <fireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
    //   }
    //   return null
    // })


  return (

    <div style={{ height: '70vh', width: '70%', margin: '10px' }} className="map" >
        <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_GMAPS_API_KEY }} 
            defaultCenter={center}
            defaultZoom={zoom}
        >
            {/* <DisasterMarker lat={center.lat} lng={center.lng} /> */}
            {/* {fireMarkers} */}
        </GoogleMapReact>
        <button type="submit" onClick={wildfireData}>Click to see nearby wildfires</button>
    </div>
  
  )
}

export default Map;




