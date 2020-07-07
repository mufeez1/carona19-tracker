import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)} style={{backgroundColor:'blue',color:'white'}}>
          <CardContent>
            <Typography color="white" variant="h4" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp start={0} end={confirmed.value} duration={0.75} separator="," />
            </Typography>
            <Typography color="white">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="h7" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}style={{backgroundColor:'yellowgreen',color:'white'}}>
          <CardContent>
            <Typography color="white" variant="h4" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp start={0} end={recovered.value} duration={0.75} separator="," />
            </Typography>
            <Typography color="white">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of recoveries from COVID-19.
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}style={{backgroundColor:'red',color:'white'}}>
          <CardContent>
            <Typography color="white" variant="h4" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp start={0} end={deaths.value} duration={0.75} separator="," />
            </Typography>
            <Typography color="white">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of deaths caused by COVID-19.
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;