import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Required'),
  mobileNo: yup.string().required('Required').matches(/^[0-9]{10}$/, 'Invalid mobile number'),
  email: yup.string().required('Required').email('Invalid email')
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ name: '', mobileNo: '', email: '' }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Submit form data to the server here
        console.log('Submitting form data:', values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <label>
            Name:
            <Field name="name" type="text" />
            {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </label>
          <br />
          <label>
            Mobile No:
            <Field name="mobileNo" type="tel" />
            {errors.mobileNo && touched.mobileNo && <ErrorMessage>{errors.mobileNo}</ErrorMessage>}
          </label>
          <br />
          <label>
            Email:
            <Field name="email" type="email" />
            {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </label>
          <br />
          <button type="submit" disabled={errors.length > 0 || !values.name || !values.mobileNo || !values.email}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
