import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import HomePage from "./pages/HomePage";

HomeFeature.propTypes = {};

function HomeFeature(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path} component={HomePage} exact />
    </Switch>
  );
}

export default HomeFeature;
