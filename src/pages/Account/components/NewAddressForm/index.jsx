import { yupResolver } from "@hookform/resolvers/yup";
import { Button, LinearProgress } from "@material-ui/core";
import InputField from "components/form-controls/InputField/index.jsx";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useStyle } from "./style.js";

NewAddressForm.propTypes = {
  onSubmit: PropTypes.func,
};

function NewAddressForm(props) {
  const classes = useStyle();

  const schema = yup.object().shape({
    fullname: yup.string().required("Vui lòng nhập họ tên của bạn"),
    address: yup.string().required("Vui lòng nhập địa chỉ của bạn"),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .min(8, "Vui lòng nhập ít nhất 8 ký tự")
      .required("Số điện thoại là bắt buộc"),
  });

  const form = useForm({
    defaultValues: {
      fullname: "",
      address: "",
      phone: "",
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
        <InputField name="fullname" label="Họ tên" form={form} />
        <InputField name="address" label="Địa chỉ" form={form} />
        <InputField name="phone" label="Số điện thoại" form={form} />

        <Button
          type="submit"
          className={classes.submit}
          variant="outlined"
          fullWidth
          disabled={isSubmitting}
          size="large">
          Thêm
        </Button>
      </form>
    </div>
  );
}

export default NewAddressForm;
