import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
    marginBottom: "10px",
  },

  img: {
    minHeight: "279px",

    "& > img": {
      width: "100%",
    },
  },

  content: {
    padding: "20px 15px 0px 15px",
    textAlign: "center",
  },

  nameProduct: {
    fontWeight: "500",
    fontSize: "15px",
    marginBottom: "10px",
  },

  price: {
    fontSize: "15px",
    fontWeight: "400",
  },
}));
