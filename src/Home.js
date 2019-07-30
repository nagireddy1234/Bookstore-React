import React from 'react';
import Menu from './Components/Navbar';
import Welcome from "./Components/Welcome";
import FooterPage from "./Components/Footer";


function Home() {
  return (
    <div >
      <Menu />
      <Welcome />
      <FooterPage />
   
    </div>
  );
}

export default Home;
