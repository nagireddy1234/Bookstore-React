import React, {Component} from 'react';
import Menu from './Components/Navbar';
import Welcome from "./Components/Welcome";
import FooterPage from "./Components/Footer";
import Warnignsign from "./Components/Alert";
import Mybadge from "./Components/Mybadge";
import Fantasy from './assests/horror.json';
import SingleBook from './Components/SingleBook';

export default class Home extends Component {

 state = {

   }

  createText = () => {
    return "creating WarningSign which receives as a property a text. This text should be presented inside an Alert of type danger"
  }

  singleBook = () => {
    Fantasy.slice(0, 1).map((film, index) => {
      return film;    
    });    
  }

  

  render() { 
    return ( 
      <div >
      <Menu />
      <Welcome />
      <Warnignsign text={this.createText()} />
      <Mybadge text={this.createText()}/>
      
      <SingleBook />
      <FooterPage />
    </div>
     );
  }
}
 
