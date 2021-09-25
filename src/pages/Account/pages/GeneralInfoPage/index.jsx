import { Box } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../../../components/NotFound";
import AddressPage from "../AddressPage";
import InfoPage from "../InfoPage";
import OdersPage from "../OdersPage";
import { useStyles } from "./style";

function GeneralInfoPage() {
  const classes = useStyles();
  const match = useRouteMatch();

  return (
    <Box className={classes.root}>
      <Switch>
        <Route path={match.path} component={InfoPage} exact />
        <Route path={`${match.path}/address`} component={AddressPage} exact />
        <Route path={`${match.path}/orders`} component={OdersPage} exact />

        <Route component={NotFound} />
      </Switch>
    </Box>
  );
}

export default GeneralInfoPage;