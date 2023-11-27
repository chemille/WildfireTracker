// import React from 'react';
// import { Icon } from '@iconify-icon/react';
// import alertIcon from '@iconify-icons/mdi-light/alert';

// const DisasterMarker = ({lat, lng, onClick}) => {
//     return (
//         <div className = "disaster-marker" onClick = {onClick}>
// <Icon icon={alertIcon} className ="disaster-icon"></Icon>
//         </div>
//     )
// }

// export default DisasterMarker

///////// This component is currently responsible for showing selectedLocation with footprint icon ///////////
import React from 'react';
import { Icon } from '@iconify-icon/react';


const DisasterMarker = ({lat, lng, onClick}) => {
    return (
        <div className = "disaster-marker" onClick = {onClick}>
            <Icon icon="guidance:stand-here" className ="disaster-icon"></Icon>
        </div>
    )
}

export default DisasterMarker