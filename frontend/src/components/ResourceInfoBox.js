// import React from "react";
// import '../styles/resourceInfoBox.css'

// const ResourceInfoBox = ({resourcesList}) => {
//     <div className="resource-info">
//     {resourcesList}
// </div>
// }

// export default ResourceInfoBox

//////////////////////////////////
import React from "react";
import '../styles/resourceInfoBox.css';

const ResourceInfoBox = ({ resourcesList }) => {
  
    // You were missing the return statement here
    return (
        <div className="resource-info">

            {/* Render resources data as needed */}
            {/* {JSON.stringify(resourcesList, null, 2)} */}
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
