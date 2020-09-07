import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core"
import useStyles from "./Categories.style";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";

function Categories() {
  const cls = useStyles();
  const CatItem = ({ children }) => {
    return (<Grid item
    ><Paper className={cls.categorieItem}>{children}</Paper></Grid>
    )
  }
  return <div >
    <Grid container spacing={4} justify="center">
      <CatItem>Finance</CatItem>
      <CatItem>
        <Grid container>
          <Grid item xs={12}>
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
        </Grid>
      </CatItem>
      <CatItem>Math</CatItem>
    </Grid>
  </div>;
}

export default Categories;
