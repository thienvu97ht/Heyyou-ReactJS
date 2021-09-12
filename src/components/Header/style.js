import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    height: "100%",
    // width: "1140px",

    "& img": {
      maxWidth: "80px",
      display: "block",
      cursor: "pointer",
    },

    "& > ul": {
      display: "flex",
      listStyle: "none",
      margin: 0,
      padding: 0,

      "& > li": {
        marginLeft: theme.spacing(2),
        cursor: "pointer",
        display: "flex",
        alignItems: "center",

        "& > p": {
          fontSize: "17px",
          fontWeight: "300",

          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },

  menuProducts: {
    display: "none",
    backgroundColor: "rgba(0,0,0,0.85)",

    opacity: 0,
    transitionDelay: "1s",

    "& li:hover": {
      backgroundColor: "rgba(0,0,0,0.9)",
    },
  },

  subMenu: {
    position: "relative",

    "& > ul": {
      position: "absolute",
      listStyle: "none",
      top: "40px",
      padding: 0,

      "& > li": {
        "& > p": {
          padding: "10px 15px",
          borderBottom: "solid 1px rgba(255, 255, 255, 0.3)",
          fontSize: "13px",
        },
      },
    },

    "&:hover > ul": {
      display: "block",
      opacity: 1,
      transitionDelay: "1",
    },
  },

  iconButton: {},

  title: {
    padding: theme.spacing(0, 1),
    margin: 0,

    fontSize: "14px",
  },

  searchBox: {
    backgroundColor: "rgba(255,255,255,0.85)",
    display: "flex",
    alignItems: "center",
    height: "38px",
    borderRadius: "5px",

    paddingLeft: theme.spacing(1),
  },
}));
