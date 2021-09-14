import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

function AuthPage(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.loginApp}>
        <Typography>ĐĂNG NHẬP BẰNG</Typography>
        <Box className={classes.btnGroup}>
          <button className={classes.fbBtn}>Facebook</button>
          <button className={classes.ggBtn}>Google</button>
        </Box>
      </Box>
      <Box className={classes.line}>
        <span>Hoặc</span>
      </Box>
      <Box className={classes.boxLogin}>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12}>
            <Typography className={classes.titleBox}>ĐĂNG NHẬP</Typography>
            LoginForm
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <Typography className={classes.titleBox}>
              ĐĂNG KÝ THÀNH VIÊN MỚI
            </Typography>
            RegisterForm
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default AuthPage;
