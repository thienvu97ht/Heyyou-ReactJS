import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
    marginBottom: "10px",
  },

  img: {
    "& > img": {
      width: "100%",
    },
  },

  content: {
    padding: "20px 15px 0px 15px",
    textAlign: "center",
  },
}));
