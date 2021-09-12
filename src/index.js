import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./fonts/SVN-Veneer.ttf";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <App />
      </SnackbarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
