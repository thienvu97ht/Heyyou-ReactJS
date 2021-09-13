import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./style";
import { Box, Container, Grid, Typography } from "@material-ui/core";

Footer.propTypes = {};

function Footer(props) {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box className={classes.footerTop}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box className={classes.footerTitle}>
              <Typography>Danh mục</Typography>
            </Box>
            <Box component="ul" className={classes.linkWidget}>
              <Box component="li">
                <Typography>Tìm kiếm</Typography>
              </Box>
              <Box component="li">
                <Typography>Giới thiệu</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách đổi trả</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách bảo mật</Typography>
              </Box>
              <Box component="li">
                <Typography>Điều khoản dịch vụ</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box className={classes.footerTitle}>
              <Typography>Blog</Typography>
            </Box>
            <Box component="ul" className={classes.linkWidget}>
              <Box component="li">
                <Typography>Tìm kiếm</Typography>
              </Box>
              <Box component="li">
                <Typography>Giới thiệu</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách đổi trả</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách bảo mật</Typography>
              </Box>
              <Box component="li">
                <Typography>Điều khoản dịch vụ</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box className={classes.footerTitle}>
              <Typography>Liên hệ</Typography>
            </Box>
            <Box component="ul" className={classes.linkWidget}>
              <Box component="li">
                <Typography>Tìm kiếm</Typography>
              </Box>
              <Box component="li">
                <Typography>Giới thiệu</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách đổi trả</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách bảo mật</Typography>
              </Box>
              <Box component="li">
                <Typography>Điều khoản dịch vụ</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <Box className={classes.footerTitle}>
              <Typography>Thông tin</Typography>
            </Box>
            <Box component="ul" className={classes.linkWidget}>
              <Box component="li">
                <Typography>Tìm kiếm</Typography>
              </Box>
              <Box component="li">
                <Typography>Giới thiệu</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách đổi trả</Typography>
              </Box>
              <Box component="li">
                <Typography>Chính sách bảo mật</Typography>
              </Box>
              <Box component="li">
                <Typography>Điều khoản dịch vụ</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.footerMid}></Box>
      <Box className={classes.footerBottom}></Box>
    </Container>
  );
}

export default Footer;
