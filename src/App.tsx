import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import './App.css';
import Fonts from './styles/fonts';

import Main from './pages/Main';
import Header from "./components/Header";

const colors = {
  light: "#E6E9EF",
  dark: "#1D1D1D",
  turquoise: "#27D7CF",
  sky: "#3693E2",
  ocean: "#4164F0",
  purple: "#795AF1",
  pink: "#FF8AE0"
};

const theme = extendTheme({
  colors: {
    light: colors.light,
    dark: colors.dark,
    turquoise: colors.turquoise,
    sky: colors.sky,
    ocean: colors.ocean,
    purple: colors.purple,
    pink: colors.pink
  },
  fonts: {
    heading: "'Cera Pro Bold'",
    body: "'Cera Pro Medium'"
  },
  styles: {
    global: {
      body: {
        bg: mode(colors.light, colors.dark),
        color: mode(colors.dark, colors.light)
      }
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Fonts/>
        <Header/>
        <Main/>
      </div>
    </ChakraProvider>
  );
}

export default App;
