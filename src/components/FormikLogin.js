import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const FormikLogin = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await sleep(500);
    onSubmit(values);
  };

  const handleValidation = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  return (
    <div>
      <h1>Formik Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validate={handleValidation}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" />
            <ErrorMessage
              data-testid="usernameError"
              name="username"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage
              data-testid="passwordError"
              name="password"
              component="div"
              style={{ color: "red" }}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikLogin;
