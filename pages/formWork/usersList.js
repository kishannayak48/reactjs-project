import React from 'react'
import { Col, Row } from "react-bootstrap";
import User from './user';
function UsersList() {

  return (
    <>
    <Row>
      
      <Col>
        <h4>Name</h4>
      </Col>
      <Col>
        <h4>Email</h4>
      </Col>
      <Col>
        <h4>Mobile</h4>
      </Col>
      <Col>#</Col>
    </Row>
    <User/>

    </>
  );
}
export default UsersList
