import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Component/Home/Home";
import Pendaftaran from "../Component/Pendaftaran/Pendaftaran";


const Routes = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/pendaftaran" component={Pendaftaran}/> 
      </Switch>
    </Router>
  );
};

export default Routes;
