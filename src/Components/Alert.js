import React, {Component} from 'react';
import { Alert } from 'reactstrap';

class Warnignsign extends Component {
  state = {  }
  render() 
 
  { 
    return ( 
      <Alert color="danger" style={{ margin:"20px auto"}}>
        {this.props.text}
      </Alert>
     );
  }
}
 
export default Warnignsign;