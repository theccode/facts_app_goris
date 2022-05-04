import React from 'react';
import { Box } from '@material-ui/core';
import useStyles from './styles'
import { ThemeProvider, createTheme } from '@mui/material/styles'


const ItemList = () => {
    const classes = useStyles();
    const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

return (
    <Box display="flex" className={classes.container} >
        <Box className={classes.listItem}>
            <img src={require('../../assets/images/settings.png')} alt=""/>
            <h2 className="large">
                100%
            </h2>
            <p className={classes.leading}>
                Production House
            </p>
        </Box>
        <Box className={classes.listItem}>
            <img  src={require('../../assets/images/creative.png')} alt=""/>
            <h2 className="large">
                64%
            </h2>
            <p className={classes.leading}>
            Creative Design
            </p>
        </Box>
        <Box className={classes.listItem}>
            <img src={require('../../assets/images/rate.png')} alt=""/>
            <h2 className="large">
                80%
            </h2>
            <p className={classes.leading}>
                Satisfaction of Clients
            </p>
        </Box>
        <Box className={classes.listItem}>
            <img src={require('../../assets/images/basket.png')} alt=""/>
            <h2 className="large">
                87%
            </h2>
            <p className={classes.leading}>
                Production House
            </p>
        </Box>
    </Box>       
    )
}
export default ItemList;