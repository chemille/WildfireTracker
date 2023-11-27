import React from 'react';

const WildFireMarker = ({ lat, lng, onClick }) => {
  console.log("Marker Coordinates:", lat, lng);

  return (
    <div className="disaster-marker" onClick={onClick}>
      <span role="img" aria-label="fire" style={{ fontSize: '50px' }}>
        🔥
      </span>
    </div>
  );
};

export default WildFireMarker;