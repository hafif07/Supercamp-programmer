import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Component/Home/Home";
import Pendaftaran from "../Component/Pendaftaran/Pendaftaran";
import Program3hari from "../Container/Pages/Program3Hari";
import Berbayar from "../Component/Berbayar/Berbayar";
import BebasBiaya from "../Component/Bebas Biaya/BebasBiaya";
import IsiProgram from "../Component/isiProgram/IsiProgram";


const Routes = () => {
  return (
    <Router>
      <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/pendaftaran" component={Pendaftaran}/> 
         <Route path="/program-3-hari" component={Program3hari}/> 
         <Route path="/berbayar" component={Berbayar}/>
         <Route path="/bebas_biaya" component={BebasBiaya}/>
         <Route path="/website_responsive" component={IsiProgram} />
      </Switch>
    </Router>
  );
};

export default Routes;
