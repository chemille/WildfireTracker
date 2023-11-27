import React from 'react';
import { Icon } from '@iconify-icon/react';


const fireMarker = ({data, onClick}) => {
    const fireMarkers = data.map(ev => {
        if(ev.categories[0].id === 8) {
            return <fireMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
        })

    return (
        <div onClick={fireMarkers}>
            <Icon icon="noto:fire" ></Icon>
        </div>
    )
}

export default fireMarker