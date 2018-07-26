import React from 'react';
import Table from '../Components/Table.js';
import Modal from '../Components/Modal.js';
import ProductForm from '../Components/ProductForm.js'
import Title from '../Components/ContentTitle.js';
import { Row, Col } from 'reactstrap';

export default class ProductComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:5000/products')
      .then(result => result.json())
      .then(data => this.setState({products: data.Products}, () => console.log(this.state.products)));
  }

  render() {
    return (
      <div>
        <div>
          <Title name='Products' />
        </div>
        <Row>
          <Col sm={12}>
            <Table
              columns={['#', 'Name', 'Price']}
              data={[]}
              edit='true'
              editModal={<Modal label='Edit' title='Edit Product' body={<ProductForm product={{}} />} secondButton='DELETE' />}
            />
          </Col>
          <Modal label='Add new product' title='Add New Product' body={<ProductForm />} />
        </Row>
      </div>
    );
  }
}
