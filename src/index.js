import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {StateProvider} from './StateProvider';
import reducer, {initialState} from './reducer';

ReactDOM.render(
	<StateProvider initialState={initialState} reducer={reducer}>
	  <React.StrictMode>
		  <App />
	  </React.StrictMode>
	</StateProvider>,
  document.getElementById("root")
);
