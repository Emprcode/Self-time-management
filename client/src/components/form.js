import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export const searchForm = () => {
  return (
    <div>
      <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Task name" />
        </Col>
        <Col>
          <Form.Control  placeholder="Number of hour" />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
          </Button>
          </Col>
        
      </Row>
    </Form>
    </div>
  )
}
