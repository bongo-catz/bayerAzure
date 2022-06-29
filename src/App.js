import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/pages/Home";
import AddInformation from "./components/pages/AddInformation";
import QueryInformation from "./components/pages/QueryInformation";
import ViewInformation from "./components/pages/ViewInformation";

function App() {
  return (
    <>
    <Router>
        <Navbar />
          <Routes>
            <Route path = '/' exact element = {<Home />} />
          </Routes>
          <Routes>
            <Route exact path = "/add_information" element = {<AddInformation />} />
          </Routes>
          <Routes>
            <Route exact path = "/home" element = {<Home />} />
          </Routes>
          <Routes>
            <Route exact path = "/view_information" element = {<ViewInformation />} />
          </Routes>
          <Routes>
            <Route exact path = "/query_information" element = {<QueryInformation />} />
          </Routes>
    </Router>
    </>
  );
}

export default App;
