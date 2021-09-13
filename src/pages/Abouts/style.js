import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "100px",
  },

  titleBox: {
    marginBottom: "50px",
    textAlign: "center",
    display: "block",

    "& > p": {
      fontSize: "40px",
      fontFamily: "SVN-Veneer",

      paddingBottom: "15px",
      position: "relative",
      display: "inline-block",
    },
  },
}));
