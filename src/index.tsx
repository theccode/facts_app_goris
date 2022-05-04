import React from 'react';
import  ReactDOM  from 'react-dom';
import App  from './App';
import {
    ThemeProvider,
    createTheme,
    StyledEngineProvider
  } from "@mui/material/styles";
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 300, // phone
        sm: 600, // tablets
        md: 900, // small laptop
        lg: 1200, // desktop
        xl: 1536 // large screens
      }
    }
  });
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
            <App />
        </StyledEngineProvider>
    </ThemeProvider>, 
    document.getElementById('root')
);
