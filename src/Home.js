import React, {Component} from 'react';
import Menu from './Components/Navbar';
import Welcome from "./Components/Welcome";
import FooterPage from "./Components/Footer";
import Warnignsign from "./Components/Alert";
import Mybadge from "./Components/Mybadge";
import items from "./assests/fantasy.json";
import historyitems from "./assests/history.json";
// import  from "./Components/singlebook"
import Singlebook from './Components/Singlebook';
import Booklist from "./Components/Booklist";
// import AutocompletePage from './Components/Filtersearch';

export default class Home extends Component {
 state = { 
   }
    createText =()=>{
      return "creating WarningSign which receives as a property a text. This text should be presented inside an Alert of type danger"};
      book =
       
  render() { 
    const bookcover= items[0].img;
    const booktitle= items[0].title;
    const bookprice= items[0].price;

    return ( 
      <div >
      <Menu />
      <Welcome />
      <Warnignsign text={this.createText()} />
      <Mybadge text={this.createText()}/>
      <Singlebook bookcover={bookcover} booktitle={booktitle} bookprice={bookprice} />
      {/* <AutocompletePage historyitems={historyitems}/> */}
      <Booklist historyitems={historyitems}/>
      <FooterPage />
    </div>
     );
  }
}
 
