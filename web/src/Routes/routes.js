import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Grid from "../components/Grid/grid";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Grid }  path="/posts" />
       </BrowserRouter>
   )
}

export default Routes;
