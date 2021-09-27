import userApi from "api/userApi";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import ForgotPasswordForm from "../ForgotPasswordForm";
import { Typography, Box } from "@material-ui/core";
import { useStyle } from "./style";
import NewPasswordForm from "../NewPasswordForm";

const MODE = {
  SENDEMAIL: "sendEmail",
  NEWPASSWORD: "newPassword",
};

function ForgotPassword() {
  const classes = useStyle();
  const { enqueueSnackbar } = useSnackbar();

  const [mode, setMode] = useState(MODE.SENDEMAIL);

  const handleSubmitOTP = async (values) => {
    const resp = await userApi.forgotPassword(values);

    if (resp.status === 1) {
      setMode(MODE.NEWPASSWORD);

      enqueueSnackbar(resp.message, {
        variant: "success",
        autoHideDuration: 2000,
      });
    } else {
      enqueueSnackbar(resp.message, {
        variant: "error",
        autoHideDuration: 2000,
      });
    }
  };

  const handleChangePassword = (values) => {
    console.log(values);
  };

  return (
    <>
      {mode === MODE.SENDEMAIL && (
        <Box>
          <Typography className={classes.titleBox}>QUÊN MẬT KHẨU</Typography>
          <ForgotPasswordForm onSubmit={handleSubmitOTP} />
        </Box>
      )}
      {mode === MODE.NEWPASSWORD && (
        <Box>
          <Typography className={classes.titleBox}>MẬT KHẨU MỚI</Typography>
          <NewPasswordForm onSubmit={handleChangePassword} />
        </Box>
      )}
    </>
  );
}

export default ForgotPassword;
