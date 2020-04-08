import React from 'react';
import './Card.style.scss';

import { Grid, Card, CardContent, Typography } from '@material-ui/core';


const Cards = (props) => {
    console.log(props)
    return (
        <div className='conatiner'>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterbottom >Infected</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color='textSecondary'>REAL DATA</Typography>
                        <Typography variant='body2'>Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterbottom >Recovered</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color='textSecondary'>REAL DATA</Typography>
                        <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterbottom >Deaths</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color='textSecondary'>REAL DATA</Typography>
                        <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    );
};

export default Cards;