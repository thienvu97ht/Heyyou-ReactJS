import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

AboutsPage.propTypes = {};

function AboutsPage() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography>GIỚI THIỆU</Typography>
      </Box>
    </Container>
  );
}

export default AboutsPage;
