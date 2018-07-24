import React from 'react';
import Table from '../Components/Table.js';
import { Row } from 'reactstrap';

export default class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:5000/users')
      .then(result => result.json())
      .then(data => this.setState({users: data.Users}, () => console.log(this.state.users)));
  }

  render() {
    return (
      <Row>
        <Table
          columns={['#', 'Name', 'email']}
          data={this.state.users}
        />
      </Row>
    );
  }
}
