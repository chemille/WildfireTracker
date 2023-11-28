// const LocationInfoBox = ({ info }) => {
//   return (
//     <div className="location-info">
//       <h2>Event Location Info</h2>
//       <ul>
//         <li>ID: <strong>{ info.id }</strong></li>
//         <li>TITLE: <strong>{ info.title }</strong></li>
//       </ul>
//     </div>
//   )
// }

// export default LocationInfoBox

//////////////////

const LocationInfoBox = ({ fire }) => {
  if (!fire) {
    return null; // Don't render anything if there is no selected fire
  }

  return (
    <div className="location-info">
      <h2>{fire.title}</h2>
    </div>
  );
};

export default LocationInfoBox;
