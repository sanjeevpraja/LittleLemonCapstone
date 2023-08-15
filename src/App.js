import React from "react";
import Header from './components/Header';
import FooterWithLogoLeft from "./components/Footer";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";
import Components from "./pages/Components";
import {ChakraProvider} from "@chakra-ui/react";
import Color from 'color';
import { extendTheme } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import './App.css';
import './scss/style.scss';

const primaryColor = Color('#495E57');
const secondaryColor = Color('#FFEB3B');
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  fonts: {
    heading: '"Markazi Text", sans-serif',
    body: '"Karla", sans-serif',
  },
  colors: {
    primary: {
      100: primaryColor.lighten(1.8).hex(),
      200: primaryColor.lighten(1).hex(),
      300: primaryColor.lighten(.8).hex(),
      400: primaryColor.lighten(.3).hex(),
      500: primaryColor.hex(),
      600: primaryColor.darken(.3).hex(),
      700: primaryColor.darken(.5).hex(),
      800: primaryColor.darken(.8).hex(),
      900: primaryColor.darken(1).hex(),
    },
    secondary: {
      // 100: "#FFF9C4",
      // 200: "#FFF59D",
      // 300: "#FFF176",
      // 400: "#FFEE58",
      // 500: "#FFEB3B",
      // 600: "#FDD835",
      // 700: "#FBC02D",
      // 800: "#F9A825",
      // 900: "#F57F17",
      100: secondaryColor.lighten(.6).hex(),
      200: secondaryColor.lighten(.5).hex(),
      300: secondaryColor.lighten(.4).hex(),
      400: secondaryColor.lighten(.3).hex(),
      500: secondaryColor.hex(),
      600: secondaryColor.darken(.3).hex(),
      700: secondaryColor.darken(.5).hex(),
      800: secondaryColor.darken(.8).hex(),
      900: secondaryColor.darken(1).hex(),
    },
  },
})


function App() {
  return (
      <ChakraProvider theme={theme}>
        <Header/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/reservation" element={<BookingForm />} />
            <Route exact path="/components" element={<Components />} />
          </Routes>
        </Router>,
        <FooterWithLogoLeft/>
      </ChakraProvider>
  );
}

export default App;
