// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LocationForm from './components/LocationForm';
// import Map from './components/Map';

// const App = () => {

//   return (
//     <Router>
//         <Routes>
//           <Route path="/" element={<LocationForm />} />
//           <Route path="/map" element={<Map />} />
//         </Routes>
//     </Router>
//   );
// };

// export default App;

//////////// Try to get NASA Api call working to display fire icons //////////
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LocationForm from './components/LocationForm';
import Map from './components/Map';
import { useState, useEffect } from 'react';

const App = () => {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events?status=open')
  //     const { events } = await res.json()

  //     setData(events)
  //   }
  //   fetchData()

  //   console.log('Fetching events data:', data);
  // }, []) 

  

  return (
    <Router>
        <Routes>
          <Route path="/" element={<LocationForm />} />
          <Route path="/map" element={<Map />} />
          {/* <Route path="/map" element={<Map data={data} />} />  */}
        </Routes>
    </Router>
  );
};

export default App;

// Event data is being passed into our Map component