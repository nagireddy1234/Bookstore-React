import React, {Component} from 'react';
import Menu from './Components/Navbar';
import Welcome from "./Components/Welcome";
import FooterPage from "./Components/Footer";
import Warnignsign from "./Components/Alert";

export default class Home extends Component {
 state = { 
   }
    createText =()=>{return "creating WarningSign which receives as a property a text. This text should be presented inside an Alert of type danger"}
  render() { 
    return ( 
      <div >
      <Menu />
      <Welcome />
      <Warnignsign text={this.createText()} />
      <FooterPage />
    </div>
     );
  }
}
 
