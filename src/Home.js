import React, {Component} from 'react';
import Menu from './Components/Navbar';
import Welcome from "./Components/Welcome";
import FooterPage from "./Components/Footer";
import Warnignsign from "./Components/Alert";
import Mybadge from "./Components/Mybadge";
import Horror from './assests/horror.json';
import SingleBook from './Components/SingleBook';

export default class Home extends Component {

 state = {}

  createText = () => {
    return "creating WarningSign which receives as a property a text. This text should be presented inside an Alert of type danger"
  }

  showBook = () => {
    const details = Horror.slice(0, 1);
    details.map((film) => {
      return film.title;
    }) 
  }
      

  render() {

    return ( 
      <div >
        <Menu />
        <Welcome />
        <Warnignsign text={this.createText()} />
        <Mybadge text={this.createText()}/>
        <SingleBook title={this.showBook()} />

        <FooterPage />
      </div>
     );
  }
}
 
