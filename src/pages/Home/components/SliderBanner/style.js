import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {},

  imgBox: {
    "&:focus-visible": {
      outline: "none",
    },

    "& > img": {
      width: "100%",
    },
  },
}));
