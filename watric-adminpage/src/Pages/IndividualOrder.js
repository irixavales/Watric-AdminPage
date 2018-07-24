import React from 'react';
import { Card, CardTitle, CardText, CardHeader, CardBody, CardLink } from 'reactstrap';
import Title from '../Components/ContentTitle';

export default class IndividualOrder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user
    };
  }

  render() {
    return(
      <div>
        <div>
          <Title name='Order' />
        </div>
        <div>
          <Card>
            <CardHeader>Customer</CardHeader>
            <CardBody>
              <CardTitle>{this.state.user.name}</CardTitle>
              <CardText>{this.state.user.email}</CardText>
              <CardLink href="#">Send Email</CardLink>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Shipping Address</CardHeader>
            <CardBody>
              <CardText>{this.state.user.address}</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Order</CardHeader>
            <CardBody>
              <CardText>{this.state.user.order}</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardHeader>Order Info</CardHeader>
            <CardBody>
              <CardText>Date Ordered: {this.state.user.date}</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }

}
