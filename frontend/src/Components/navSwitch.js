import {
    Switch,Route
  } from "react-router-dom";
import { Cartjs } from "./Cart";
  import { Home } from './Home';
import { Products } from './Products';
export const NavSwitch=()=>
{
    return(
        <Switch>
        <Route exact path="/">
        <Products />
        </Route>
        <Route path="/cart">
        <Cartjs/>
        </Route>
      </Switch>
    )
}