import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../../../components/NotFound";
import AccountAddress from "../AccountAddress";
import AccountInfo from "../AccountInfo";
import AccountOders from "../AccountOders";
import { useStyles } from "./style";

AccountGeneralInfo.propTypes = {};

function AccountGeneralInfo(props) {
  const classes = useStyles();
  const match = useRouteMatch();

  console.log(match);

  return (
    <Box className={classes.root}>
      <Switch>
        <Route path={match.path} component={AccountInfo} exact />
        <Route
          path={`${match.path}/address`}
          component={AccountAddress}
          exact
        />
        <Route path={`${match.path}/orders`} component={AccountOders} exact />

        <Route component={NotFound} />
      </Switch>
    </Box>
  );
}

export default AccountGeneralInfo;
