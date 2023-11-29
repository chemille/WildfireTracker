import React from "react";
import '../styles/resourceInfoBox.css';

const ResourceInfoBox = ({ resourcesList }) => {
  
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
