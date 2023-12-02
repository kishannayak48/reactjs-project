import React from 'react'
import { Col, Row } from "react-bootstrap";

function User(props) {

  const { firstName, email, lastname } = props;


  return (
    <Row className="mt-3">
      <Col>{firstName}</Col>
      <Col>{lastname}</Col>
      <Col>{email}</Col>
    </Row>

  )
}
export default User
