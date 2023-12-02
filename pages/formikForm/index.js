import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
  name: '',
  mobileNo: '',
  address: '',
};

function FormikWork() {
  //   const handleSubmit = (values) => {
  //     console.log(values); // Handle form submission logic here
  //   };

  const handleSubmitForm = (values, actions) => {
    // const current = formRef.current;
    // debugger;
    // console.log("===formRef====", formRef.current);
    callApi().then((res) => {
      if (res.success) {
        setUsers([...users, values]); //Set users
        actions.resetForm();
      }
    })
  }
  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    mobileNo: yup.string().required('Mobile number is required'),
    address: yup.string().required('Address is required'),
  });






  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={6}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmitForm}
          >
            {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => {
              return (
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Field
                      type="text"
                      name="name"
                      as={Form.Control}
                      placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </Form.Group>

                  <Form.Group controlId="mobileNo">
                    <Form.Label>Mobile Number:</Form.Label>
                    <Field
                      type="text"
                      name="mobileNo"
                      as={Form.Control}
                      placeholder="Enter your mobile number"
                    />
                    <ErrorMessage name="mobileNo" component="div" className="text-danger" />
                  </Form.Group>

                  <Form.Group controlId="address">
                    <Form.Label>Address:</Form.Label>
                    <Field
                      type="text"
                      name="address"
                      as={Form.Control}
                      placeholder="Enter your address"
                    />
                    <ErrorMessage name="address" component="div" className="text-danger" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
} export default FormikWork;
