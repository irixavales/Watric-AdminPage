import React from 'react';
import { Card, Table } from 'reactstrap';

export default class TableComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: this.props.columns,
      data: this.props.data,
      edit: this.props.edit,
      editModal: this.props.editModal,
      detail: this.props.detail
    };
    console.log('data:', this.state.data);
  }

  render() {
    return (
      <div class="col-sm-12">
        <Card>
          <Table hover>
            <thead>
              <tr>
                {this.state.columns.map(col => <th>{col}</th>)}
                {this.state.edit && <th></th>}
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(row =>
                <tr>
                  {row.map(col =>
                    <td>{col}</td>
                  )}
                  {this.state.edit &&
                    <td>{this.state.editModal}</td>
                  }
                </tr>
              )}
            </tbody>
          </Table>
        </Card>
        {this.state.data.map(row =>
          <div>
            {row}
          </div>
        )}
      </div>
    );
  }
}
