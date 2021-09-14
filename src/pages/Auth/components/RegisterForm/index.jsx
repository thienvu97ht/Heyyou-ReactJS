import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, LinearProgress, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import PasswordField from "../../../../components/form-controls/PasswordField";
import { useStyle } from "./style.js";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name.")
      .test(
        "shold has at least tow words",
        "Please enter at least tow words",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),

    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter an valid email address"),

    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters"),

    retypePassword: yup
      .string()
      .required("Please retype your password")
      .oneOf([yup.ref("password")], "Password does not match"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Họ và tên" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Mật khẩu" form={form} />
        <PasswordField
          name="retypePassword"
          label="Nhập lại mật khẩu"
          form={form}
        />

        <Button
          type="submit"
          className={classes.submit}
          variant="contained"
          color="primary"
          fullWidth
          disabled={isSubmitting}
          size="large">
          Đăng ký
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
