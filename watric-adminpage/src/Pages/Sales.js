import React from 'react';
import Table from '../Components/Table.js';
import Title from '../Components/ContentTitle.js'

export default class SalesComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sales: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:5000/purchases')
      .then(result => result.json())
      .then(data => this.setState({sales: data.Purchases}, () => console.log(this.state.sales)));
  }

  render () {
    return (
      <div>
        <div>
          <Title name='Sales' />
        </div>
        <Table
          columns={['#', 'Customer', 'Order', 'Total', 'Date', 'Shipping Info', 'Status']}
          data={this.state.sales}
          detail='true'
        />
      </div>
    )
  }
}
