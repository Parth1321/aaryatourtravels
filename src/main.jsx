// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Home from './Component/Home'
// import 'bootstrap/dist/css/bootstrap.css';
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Home />
//   </StrictMode>,
// )


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import About from './About'; // Second page

// function main() {
//     return (
//         <Router>
//             <Routes>
//                 {/* Route for Home Page */}
//                 <Route path="/" element={<Home />} />

//                 {/* Route for About Page */}
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </Router>
//     );
// }

// export default main;


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./src/Component/Home"; // Adjust this path based on file location
// import About from "./src/Component/About"; // Adjust this path based on file location

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//             </Routes>
//         </Router>
//     </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
