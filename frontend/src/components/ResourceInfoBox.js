import React from "react";
import '../styles/resourceInfoBox.css';

const ResourceInfoBox = ({ resourcesList }) => {

    if (!resourcesList || resourcesList.length === 0) {
        return (
            <div className="resource-info">
                <p>No Resources Available Within A 20 Mile Radius</p>
            </div>
        );
    }

    return (
        <div className="resource-info">
            <ul>
                {resourcesList.map((resource, index) => (
                    <ul key={index}>Address: {resource[0]}
                        <div>
                            {resource[1] && <span>Website: {resource[1]}</span>}
                        </div>
                        <br></br>
                    </ul>
                ))}
            </ul>

        </div>
    );
}

export default ResourceInfoBox;
