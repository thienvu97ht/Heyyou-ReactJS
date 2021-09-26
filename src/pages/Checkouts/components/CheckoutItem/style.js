import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },

  product: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    color: "#000",

    "& > img": {
      maxWidth: "70px",
      borderRadius: "10px",
    },

    "& > div": {
      marginLeft: "10px",

      "& > p": {
        lineHeight: "26px",
      },
    },
  },
}));
