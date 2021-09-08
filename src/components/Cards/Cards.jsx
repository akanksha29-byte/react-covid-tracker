import React from "react";
import "./Card.module.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = ({ data: { confirmed, deaths, lastUpdate, recovered } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={3} component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active covid-19 cases
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths due to covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={3} component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator={","}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of patients recovered from covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
