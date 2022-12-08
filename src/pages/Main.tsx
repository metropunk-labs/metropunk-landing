import {
  Box,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';


import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import ContactUs from '../components/ContactUs';

import '../styles/Main.css';

export default function Main() {
  const { colorMode } = useColorMode();
  
  return (
    <Box bg={useColorModeValue('light', 'dark')}>
      <div className={`${ (colorMode === 'light') ? 'container-light' : 'container-dark'}`}>
        <Hero/>
        <Features/>
        <ContactUs/>
        <Footer/>
      </div>
    </Box>
  );
}