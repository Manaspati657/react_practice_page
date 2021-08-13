import TextField from "./TextField";
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


const Contact = () => {

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })


  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
        <div className="container contact-div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div className='form-floating'>
                    <Form >
                      <TextField
                        label="First Name"
                        name="firstName"
                        type="text"
                      />
                      <TextField
                        label="last Name"
                        name="lastName"
                        type="text"
                      />
                      <TextField label="Email" name="email" type="email" />
                      <TextField
                        label="password"
                        name="password"
                        type="password"
                      />
                      <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                      />
                      <button className="btn btn-outline-success mt-3" type="submit">
                        Register
                      </button>
                      <button className="btn btn-outline-danger mt-3 mx-3" type="reset">
                        Reset
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
