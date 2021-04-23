import React from 'react';
import {BrowserRouter as Router,} from "react-router-dom";
import { NavBar } from './Components/navBar.';
import { NavSwitch } from './Components/navSwitch';

import { StoreContext } from './store/StoreContext';

import './App.css';

function App() {
  const { setProducts } = React.useContext(StoreContext);
  React.useEffect(() => {
    fetch('/products',{
    })
    .then(response => response.json())
    .then(json => {
      console.log('Response of products is');
      console.log(json);
      setProducts(json);
    })
  }, []);

  return (
    <Router>
      <NavBar/>
      <NavSwitch/>
    </Router>
  );
}

export default App;
