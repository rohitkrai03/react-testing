import React from "react";
import { Formik, Field, Form } from "formik";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const FormikLogin = ({ onSubmit }) => {
  const handleSubmit = async (values) => {
    await sleep(500);
    onSubmit(values);
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
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
