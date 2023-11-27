import React from 'react';
import { Icon } from '@iconify-icon/react';
import alertIcon from '@iconify-icons/mdi-light/alert';

const WildFireMarker = ({lat, lng, onClick}) => {
    return (
        <div style={{
            position: 'absolute',
        }} className = "wildfire-marker" onClick = {onClick}>
<Icon icon={alertIcon} className ="wildfire-icon"></Icon>
        </div>
    )
}

export default WildFireMarker