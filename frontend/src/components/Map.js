// // import { useState } from 'react'
// // import GoogleMapReact from 'google-map-react'
// // import LocationMarker from './LocationMarker'
// // import LocationInfoBox from './LocationInfoBox'

// // // define constants
// // const NATURAL_EVENT_WILDFIRE = 8;

// // const Map = ({ eventData, center, zoom }) => {
// //     const [locationInfo, setLocationInfo] = useState(null)

// //     const markers = eventData.map((ev, index) => {
// //         if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
// //             return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
// //         }
// //         return null
// //     })

// //     return (
// //         <div className="map">
// //             <GoogleMapReact
// //                 bootstrapURLKeys={{ key: 'AIzaSyAHrYdntyn6occylY_Akkk8MZnFVJwjOTI' }}
// //                 defaultCenter={ center }
// //                 defaultZoom={ zoom }
// //             >
// //                 {markers}
// //             </GoogleMapReact>
// //             {locationInfo && <LocationInfoBox info={locationInfo} />}
// //         </div>
// //     )
// // }

// // Map.defaultProps = {
// //     center: {
// //         lat: 42.3265,
// //         lng: -122.8756
// //     },
// //     zoom: 6
// // }

// // export default Map

// // Map.js
// // Map.js
// // import React, { useEffect } from 'react';
// // import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';

// // const Map = ({ eventData }) => {
// //   useEffect(() => {
// //     // Check if there is no eventData
// //     if (!eventData || eventData.length === 0) {
// //       console.warn('No wildfire events available.');
// //       return;
// //     }

// //     // Initialize map
// //     const map = L.map('map').setView([0, 0], 2);

// //     // Add tile layer (you can use your preferred tile layer)
// //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// //       attribution: '© OpenStreetMap contributors',
// //     }).addTo(map);

// //     // Add markers for each wildfire event
// //     eventData.forEach((event) => {
// //       const { lat, lon } = event.geometries[0].coordinates;
// //       const marker = L.marker([lat, lon]).addTo(map);

// //       // You can customize the marker or add popup information here
// //       marker.bindPopup(`
// //         <strong>${event.title}</strong><br />
// //         Location: ${event.geometries[0].coordinates.join(', ')}<br />
// //         Category: ${event.categories[0].title}
// //       `);
// //     });

// //     // Clean up when the component is unmounted
// //     return () => {
// //       map.remove();
// //     };
// //   }, [eventData]);

// //   // Display a message when no wildfire events are available
// //   if (!eventData || eventData.length === 0) {
// //     return <div>No wildfire events available for the specified location.</div>;
// //   }

// //   return <div id="map" style={{ height: '500px' }}></div>;
// // };

// // export default Map;

// import React, { useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import LocationMarker from './LocationMarker';
// import LocationInfoBox from './LocationInfoBox';

// // define constants
// const NATURAL_EVENT_WILDFIRE = 8;

// const Map = ({ eventData, center, zoom }) => {
//   const [locationInfo, setLocationInfo] = useState(null);

//   const markers = eventData.map((ev, index) => {
//     if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
//       return (
//         <LocationMarker
//           key={index}
//           lat={ev.geometries[0].coordinates[1]}
//           lng={ev.geometries[0].coordinates[0]}
//           onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
//         />
//       );
//     }
//     return null;
//   });

//   return (
//     <div className="map">
//       <MapContainer center={center} zoom={zoom} style={{ height: '500px', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {markers}
//       </MapContainer>
//       {locationInfo && <LocationInfoBox info={locationInfo} />}
//     </div>
//   );
// };

// Map.defaultProps = {
//   center: {
//     lat: 42.3265,
//     lng: -122.8756,
//   },
//   zoom: 6,
// };

// export default Map;

