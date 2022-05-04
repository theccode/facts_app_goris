import React  from "react";
import Layout from './components/Layout/Layout';
import {CssBaseline, Grid, Box } from '@material-ui/core';
import Facts from './components/Facts/Facts';
import ItemList from './components/ItemList/ItemList'
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <>
            <Layout>
                <CssBaseline />
                <Grid  spacing={5} style={{width: '100%'}} >
                    <Box  className={classes.container}>
                        <Grid item xs={12} md={4}>
                            <Facts />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <ItemList />
                        </Grid>
                    </Box>
                </Grid>
            </Layout>
        </>
    )
}

export default App;