import React, { useState } from 'react'
import { Button, Form, Card, Col, Row, Container } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';

import UsersList from './usersList';
function FormWork() {
  // const [users, setUsers] = useState([]);
  const [sumResult, setSumResult] = useState();

  // const { Formik } = useFormik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
  });

  const [formData, setFormData] = useState({
    firsname: "",
    mobileNo: "",
    email: "",

  });
  const [users, setUsers] = useState("");
  console.log(formData);
  function handleChange(e) {
    console.log("=======changes======",);

    setFormData(prevFormData => {
      return {
        ...prevFormData,
        users
      }
    });
  }

  // console.log("====chacke====",e.target.value);
  function handleSubmitForm(e) {

    console.log("==========Submit==========")
  }
  function handleSave(e) {


    console.log("==========Save========")
  }

  return (

    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs lg="6">
          Name: {formData.firsname}
          <UsersList users={users} setUsers={setUsers} />

        </Col>

        <Col xs lg="6">
          <Card className="">
            <Card.Header>User Detail Form</Card.Header>
            <Card.Body>Form here</Card.Body>

            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',

              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <br />
                  <br />
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>last name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <br />
                  <br></br>
                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <br />
                  <br />
                  <Button variant="primary" onClick={handleSave} type="submit">
                    Save Data
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default FormWork
