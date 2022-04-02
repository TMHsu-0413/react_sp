import React from "react";
import {Button} from '@mui/material'
import HomepageBody from "./components/HomepageBody";
import Roy_page from "./components/Roy_page/Roy_page";
import Khu_page from "./components/Khu_page/Khu_page";
import Denny_page from "./components/Denny_page/Denny_page";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <h1>Members</h1>
      <Routes>
        <Route path="/" element={<HomepageBody />}></Route> 
        <Route path="/Roy" element={<Roy_page />}></Route> 
        <Route path="/Denny" element={<Denny_page />}></Route> 
        <Route path="/Khu" element={<Khu_page />}></Route> 
      </Routes>
    </div>
  );
}

export default App;
