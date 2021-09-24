import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > td": {
      padding: "8px",

      "& > button": {
        paddingRight: "0px",
      },
    },
  },

  product: {
    display: "flex",

    "& > img": {
      maxWidth: "150px",
    },

    "& > div": {
      marginLeft: "20px",
    },
  },

  nameProduct: {
    height: "40px",
  },

  priceBox: {
    display: "flex",
    alignItems: "flex-end",
    margin: "15px 0",
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
