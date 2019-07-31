import React, {Component} from 'react';
import { Badge } from 'reactstrap';

class Mybadge extends Component {
  state = {  }
  render() { 
    return ( 
      
         <h1>{this.props.text} <Badge color="success">New</Badge></h1>
      
     );
  }
}
 
export default Mybadge;