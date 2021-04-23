import './App.css';
import {BrowserRouter as Router,} from "react-router-dom";
import { NavBar } from './Components/navBar.';
import { NavSwitch } from './Components/navSwitch';
import {useState,useEffect,createContext} from 'react';

export const context=createContext();
function App() {
  const [prod,setProducts]=useState([])
  const [newProd,setNewProd]=useState([])
  useEffect(() => {
    fetch('/products',{
    })
    .then(response => response.json())
    .then(json => {
      setProducts(json);
    })
  }, []);
  const addtocart=(p)=>
  {
    // setUpdate((old)=>[...old,p])
    // setNewProd((old)=>{return[...old,p]})
    setNewProd([...newProd, {...p}]);
  }
  return (
    <context.Provider value={[prod,setProducts,newProd,setNewProd,addtocart]}>
    <Router>
      <NavBar/>
      <NavSwitch/>
    </Router>
    </context.Provider>
  );
}

export default App;
