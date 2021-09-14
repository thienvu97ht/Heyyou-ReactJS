import React from "react";
import LoginForm from "../LoginForm";

Login.propTypes = {};

function Login(props) {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
}

export default Login;
