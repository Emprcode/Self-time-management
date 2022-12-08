import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const SearchBar = () => {
  return (
    <Form>
      <Row className="d-flex justify-content-cente">
        <Col>
          <Form.Control placeholder="Task Name" type="text" />
        </Col>
        <Col>
          <Form.Control placeholder="Number of hour" type="number" />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Add New Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
