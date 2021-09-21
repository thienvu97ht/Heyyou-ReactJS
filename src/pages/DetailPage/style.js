import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "140px",
    marginBottom: "50px",
  },

  loading: {
    marginTop: "80px",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
