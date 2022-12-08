import Hero from "../components/Hero";
import Features from "../components/Features";
import {
  Box,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import '../styles/Main.css';

export default function Main() {
  const { colorMode } = useColorMode();
  
  return (
    <Box bg={useColorModeValue('light', 'dark')}>
      <div className={`${ (colorMode === 'light') ? 'container-light' : 'container-dark'}`}>

        <Hero/>
        <Features/>
      </div>
    </Box>
  );
}