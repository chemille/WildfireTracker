import React from 'react';
const WildFireMarker = ({ lat, lng, onClick }) => {

  return (
    <div className="disaster-marker" onClick={onClick}>
      <span role="img" aria-label="fire" style={{ fontSize: '20px' }}>
        🔥
      </span>
    </div>
  );
};

export default WildFireMarker;