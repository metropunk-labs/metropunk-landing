import React from 'react';
import { Global } from "@emotion/react";

const Fonts = () => (
  <Global styles={`
      @font-face {
        font-family: 'NUSAR';
        src: url("/fonts/NUSAR.otf") format('otf');
      }
      @font-face {
        font-family: 'Cera Pro Medium';
        src: url("/fonts/Cera Pro Medium.otf") format('otf');
      }
      @font-face {
        font-family: 'Cera Pro Bold';
        src: url("/fonts/Cera Pro Bold.otf") format('otf');
      }
      `}
  />
)

export default Fonts;