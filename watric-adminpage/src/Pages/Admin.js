import React from 'react';
import Table from '../Components/Table.js';
import Modal from '../Components/Modal.js';
import AccountForm from '../Components/AccountForm.js';
import { Row } from 'reactstrap';

export default class Admin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      admins: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:5000/admin')
      .then(result => result.json())
      .then(data => this.setState({admins: data.Admins}, () => console.log(this.state.admins)));
  }

  render() {
    return (
      <div>
        <Row>
          <Table
            columns={['#', 'Name', 'email']}
            data={this.state.admins}
          />
        </Row>
        <Row>
          <Modal label='Add new admin' title='New Admin' body={<AccountForm />} />
        </Row>
      </div>
    );
  }
}
