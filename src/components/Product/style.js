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
    height: "40px",
  },

  priceBox: {
    display: "flex",
    alignItems: "flex-end",
    marginBottom: "15px",
    justifyContent: "center",
  },

  salePrice: {
    fontSize: "16px",
    color: "#000",
    margin: 0,
    lineHeight: 1,
    fontWeight: 500,
  },

  originPrice: {
    fontSize: "16px",
    marginLeft: "20px",
    lineHeight: 1,
    fontWeight: 300,
    textDecoration: "line-through",
  },
}));
