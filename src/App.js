import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Fantasy from "./Components/Fantasy";
import Home from "./Home";

function App() {
  return (
    <div >
     <BrowserRouter>
     <Switch>
       <Route path="/" exact component={Home}></Route>
       <Route path="/fantasy" exact component={Fantasy}></Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
