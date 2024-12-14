// eslint-disable-next-line no-unused-vars
import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact"; 

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;
