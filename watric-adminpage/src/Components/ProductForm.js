import React from 'react';
import { InputGroupAddon, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    if(this.props.product) {
      this.state = {
        type: 'edit',
        name: this.props.product['name'],
        description: this.props.product['description'],
        price: this.props.product['price']
      };
    }
    else {
      this.state = {
        type: 'new'
      };
    }
  }

  render() {

    return(
          <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" value={this.state.name} />
            </FormGroup>

            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="description" value={this.state.description} />
            </FormGroup>

            <FormGroup>
              <Label for="price">Price</Label>
              <InputGroupAddon addonType="prepend">$</InputGroupAddon>
              <Input type="number" name="price" id="price" step="10" value={this.state.price} />
            </FormGroup>

            <FormGroup check row>
              {this.state.type === 'edit' &&
                <Col sm={{ size: 10, offset: 8 }}>
                  <Button>Edit</Button>
                </Col>
              }
              {this.state.type === 'new' &&
                <Col sm={{ size: 10, offset: 7 }}>
                  <Button>Add Product</Button>
                </Col>
              }
            </FormGroup>
          </Form>
    )
  }
}
