import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import OderItem from "../../components/OderItem";
import { useStyles } from "./style";

OdersPage.propTypes = {};

function OdersPage(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleShowOders = () => {
    history.push("/account/orders");
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Typography>Các đơn hàng vừa đặt</Typography>
        <Button onClick={handleShowOders}>Xem tất cả</Button>
      </Box>

      <Box className={classes.tableOders}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.headingTable}>
                <TableCell>Mã đơn hàng</TableCell>
                <TableCell>Ngày đặt</TableCell>
                <TableCell>Sản phẩm</TableCell>
                <TableCell>Tổng tiền</TableCell>
                <TableCell>Trạng thái đơn hàng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <OderItem />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default OdersPage;
