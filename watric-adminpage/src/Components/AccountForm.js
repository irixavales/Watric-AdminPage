import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AccountForm extends React.Component {

  render() {

    return(
      <Form>
        <FormGroup row>
          <Label for="name" sm={4}>Name</Label>
          <Col sm={8}>
            <Input type="text" name="name" id="name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={4}>Email</Label>
          <Col sm={8}>
            <Input type="text" name="email" id="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={4}>Password</Label>
          <Col sm={8}>
            <Input type="password" name="password" id="password" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="verify" sm={4}>Password again</Label>
          <Col sm={8}>
            <Input type="password" name="verify" id="verify" />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 3 }}>
            <Button>Create Account</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}
