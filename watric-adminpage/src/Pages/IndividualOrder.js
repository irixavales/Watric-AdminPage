import React from 'react';
import { Row, Card, CardTitle, CardText, CardHeader, CardBody, CardLink, CardDeck } from 'reactstrap';
import Title from '../Components/ContentTitle';

export default class IndividualOrder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: ['date':'2018-24-7','name':'Juan','email':'juan@juan.com','address':'debajo e un puente']
    };
  }

  render() {
    return(
      <div>
        <div>
          <Title name='Order' />
        </div>
        <div>
          <CardDeck>
            <Card>
              <CardHeader>Order Info</CardHeader>
              <CardBody>
                <CardText>Date Ordered: {this.state.user.date}</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Customer Info</CardHeader>
              <CardBody>
                <CardTitle>Name:</CardTitle>
                <CardText>Email:</CardText>
                <CardLink href="#">Send Email</CardLink>
              </CardBody>
            </Card>
            <Card>
              <CardHeader>Shipping Address</CardHeader>
              <CardBody>
                <CardText>{this.state.user.address}</CardText>
              </CardBody>
            </Card>
          </CardDeck>
          <Card>
            <CardHeader>Items Ordered</CardHeader>
            <CardBody>
              <CardText>Order</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    )
  }

}
