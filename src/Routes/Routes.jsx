import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Component/Home/Home";
import Pendaftaran from "../Component/Pendaftaran/Pendaftaran";
import Program3hari from "../Component/Program3hari/Program3hari";


const Routes = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/pendaftaran" component={Pendaftaran}/> 
         <Route path="/program-3-hari" component={Program3hari}/> 
      </Switch>
    </Router>
  );
};

export default Routes;
