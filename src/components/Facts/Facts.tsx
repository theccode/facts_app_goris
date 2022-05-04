import React from 'react';
import { Typography } from '@material-ui/core';
import  useStyles  from './styles';

const Facts = () => {
    const classes = useStyles();
    return (
        <div className={classes.facts}>
            <Typography className={classes.title_facts}>
                Facts
            </Typography>
            <Typography variant="h4" className={classes.title}>
                <span className={classes.span}>Facts</span> About Best Marketing
            </Typography>
        </div>
    )
}
export default Facts;