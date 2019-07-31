import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  export default class Singlebook extends Component {
  state = {  }
  render() { 
    return (
      <div>
      <Card>
      <CardBody>
          <CardTitle>Title:{this.props.booktitle}</CardTitle>
          </CardBody>
        <CardImg top src={this.props.bookcover} alt="Card image cap" />
        <CardBody>
          <CardSubtitle>Price: {this.props.bookprice}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
          </CardBody>
      </Card>
    </div>
      );
  }
}
 
 