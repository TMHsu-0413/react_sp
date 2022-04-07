import React from "react";
import {Button, Paper} from '@mui/material'
import HomepageBody from "./components/HomepageBody";
import RoyPage from "./components/RoyPage/RoyPage";
import KusPage from "./components/KhuPage/KusPage";
import DennyPage from "./components/DennyPage/DennyPage";
import {Routes, Route} from "react-router-dom"
import HomePageBg from "./statics/images/homepage_bg.jpg"

const styles : any = {
  paperContainer:{
    backgroundImage: "url(&{HomePageBg})"
  }
};

function App() {
  return (
    <div>
      <Paper style={styles.backgroundImage}>
        <Routes>
          <Route path="/" element={<HomepageBody />}></Route> 
          <Route path="/Roy" element={<RoyPage />}></Route> 
          <Route path="/Denny" element={<DennyPage />}></Route> 
          <Route path="/Khu" element={<KusPage />}></Route> 
        </Routes>
      </Paper>
    </div>
  );
}

export default App;
