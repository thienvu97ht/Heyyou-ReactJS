import React from "react";
import ForgotPasswordForm from "../ForgotPasswordForm";

ForgotPassword.propTypes = {};

function ForgotPassword(props) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <ForgotPasswordForm onSubmit={handleSubmit} />
    </>
  );
}

export default ForgotPassword;
