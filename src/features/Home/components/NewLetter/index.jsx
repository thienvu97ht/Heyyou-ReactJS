import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./style";

NewLetter.propTypes = {};

function NewLetter({ className }) {
  const classes = useStyles();

  return (
    <Container className={className}>
      <Box className={classes.titleBox}>
        <Typography>ĐĂNG KÝ NHẬN TIN</Typography>
      </Box>
      <Box className={classes.newsLetterBox}>
        <Typography>
          Nhập địa chỉ email của bạn để nhận được tin tức mới nhất
        </Typography>

        <Box className={classes.formBox}>
          <form>
            <input type="email" placeholder="Nhập email của bạn" required />
            <button type="submit">Đăng kí</button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

export default NewLetter;
