import React, {useEffect} from "react";
import { BrowserRouter ,Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import "./css/App.css";
import {auth} from './firebase.config';
import {useStateValue} from './StateProvider';

function App() {

  const [{} , dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("useeffect >>> ", authUser);
      if(authUser) {
        dispatch({
          type: "SET-USER",
          user: authUser,
        })
      } else {
         dispatch({
          type: "SET-USER",
          user: null,
        })
      }
    });
  },[auth]);

  return (
	<BrowserRouter>
      <div className='app'>
  		  
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
	 </BrowserRouter>
  );
}

export default App;
