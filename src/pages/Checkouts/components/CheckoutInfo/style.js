import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  sections: {
    "& > h3": {
      fontSize: "24px",
      marginBottom: "20px",
    },

    "& > p": {
      marginBottom: "10px",
    },
  },

  customer: {
    display: "flex",
    marginBottom: "20px",

    "& > img": {
      maxWidth: "60px",

      borderRadius: "10px",
    },
  },

  infoUser: {
    marginLeft: "20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

    "& > button": {
      paddingLeft: "0",

      color: "#338dbc",
    },
  },

  selectBox: {
    display: "flex",
    alignItems: "center",

    "& > p": {
      marginRight: "10px",
      fontSize: "14px",
      color: "#555",
    },

    "& .MuiInputBase-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#000",
      },
    },
  },

  select: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000",
    },
  },
}));
