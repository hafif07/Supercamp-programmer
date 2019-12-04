import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Component/Home/Home";
import Pendaftaran from "../Component/Pendaftaran/Pendaftaran";
import Program3hari from "../Container/Pages/Program3Hari";


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
