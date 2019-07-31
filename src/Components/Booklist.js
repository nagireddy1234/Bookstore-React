import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Singlebook from './singlebook';

const Booklist = (props) => {
  const historyitems =props.historyitems.map(item =>{
   return <MDBCol size="4"> <Singlebook bookcover={item.img} booktitle={item.title} bookprice={item.price} /> </MDBCol>
  })
  return (
    <div>
      <h1 className="text-center">BookList</h1>
      <MDBContainer>
      <MDBRow>
      {historyitems}
      </MDBRow>
      </MDBContainer>   
      <input />


    </div>
    
  );
}

export default Booklist;