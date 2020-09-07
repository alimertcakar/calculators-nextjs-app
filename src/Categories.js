import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core"
import useStyles from "./Categories.style";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ExposureIcon from '@material-ui/icons/Exposure';
function Categories() {
  const cls = useStyles();
  const CatItem = ({ children }) => {
    return (<Grid item
    ><Paper className={cls.categorieItem}>{children}</Paper></Grid>
    )
  }
  return <div >
    <Grid container spacing={4} justify="center">
      <CatItem>
        <Grid container item xs={12}>
          <MonetizationOnIcon className={cls.icon} style={{ margin: "3px 10px 0 0" }} />
          <Typography variant="h5" component="h2">Finance </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>BMI Calculator</div>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>Maximum Muscle Potantial Calculator</div>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>Body Fat Calculator</div>
        </Grid>
      </CatItem>

      <CatItem>
        <Grid container item xs={12}>
          <DirectionsRunIcon className={cls.icon} style={{ margin: "3px 10px 0 0" }} />
          <Typography variant="h5" component="h2">Health & Fitness</Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>BMI Calculator</div>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>Maximum Muscle Potantial Calculator</div>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>Body Fat Calculator</div>
        </Grid>
      </CatItem>

      <CatItem>
        <Grid container item xs={12}>
          <ExposureIcon className={cls.icon} style={{ margin: "3px 10px 0 0" }} />
          <Typography variant="h5" component="h2">Math </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>BMI Calculator</div>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>Maximum Muscle Potantial Calculator</div>
        </Grid>
        <Grid item xs={12}>
          <div className={cls.catMenuItem}>Body Fat Calculator</div>
        </Grid>
      </CatItem>
    </Grid>
  </div>;
}

export default Categories;
