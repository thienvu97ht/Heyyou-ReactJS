import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#000",
  },

  footerTop: {
    paddingTop: "75px",
    paddingBottom: "40px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  footerTitle: {
    "& > p": {
      fontSize: "20px",
      color: "#fff",
      fontWeight: "500",
      lineHeight: "27px",
      marginBottom: "25px",
    },
  },

  linkWidget: {
    margin: "0px",
    padding: "0px",

    "& > li": {
      listStyle: "none",
      marginBottom: "14px",

      "& > p": {
        fontSize: "13px",
        color: "#ececec",
        display: "block",
      },
    },
  },
}));
