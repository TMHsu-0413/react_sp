import React from "react";
import {Button, CssBaseline, Paper, ThemeProvider, createTheme, Typography} from '@mui/material'
import HomepageBody from "./components/HomepageBody";
import RoyPage from "./components/RoyPage/RoyPage";
import KusPage from "./components/KhuPage/KusPage";
import DennyPage from "./components/DennyPage/DennyPage";
import {Routes, Route} from "react-router-dom";
import HomePageBg from "./statics/images/homepage_bg.jpg";
import FontIansui from './statics/fonts/iansui.ttf';

const styles : any = {
  paperContainer:{
    backgroundImage: `url(${HomePageBg})`
  }
};
const theme = createTheme({
  typography: {
    fontFamily: "'芫荽 0.94'", // 因為有空格 所以在CSS要有引號
    fontSize: 16
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Iansui 094','芫荽 0.94';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: "local('Iansui 094') url(${FontIansui}) format('truetype')";
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={styles.paperContainer } sx={{height : "100vh", fontFamily: '芫荽 0.94'}} >
        <Routes>
          <Route path="/" element={<HomepageBody />}></Route> 
          <Route path="/Roy" element={<RoyPage />}></Route> 
          <Route path="/Denny" element={<DennyPage />}></Route> 
          <Route path="/Khu" element={<KusPage />}></Route> 
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
