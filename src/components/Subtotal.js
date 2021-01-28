import React from "react";
import "../css/Subtotal.css";
import {useStateValue} from '../StateProvider';
import {getBasketTotal} from '../reducer';

function Subtotal() {
	 
  const [state, dispatch] = useStateValue();
  
  
	
  return (
    <div className="subtotal">
		<p>
			Subtotal ({state.basket.length} items): <strong>${getBasketTotal(state.basket)}</strong>
		</p>
		<small>
			<input type="checkbox" />
			<label> This order contains a gift</label>
		</small>
		<button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
