import FlipMove from 'react-flip-move';
import "../css/Checkout.css";
import Product from "./Product";
import Subtotal from "./Subtotal";
import Banner from '../img/furniture.jpg';
import Parachute from '../img/parachute.jpg';
import {useStateValue} from '../StateProvider';
import React from "react";


function Checkout() {
	
  const [state, dispatch] = useStateValue();
  
  const removeProduct = (id) => {
	dispatch({
		type: "REMOVE-PRODUCT",
		id: id,
	});
  };
  
  return (
    <div className="checkout">
		<div className="checkout-left">
			<img src={Banner} alt="...banner" />
			<h2><small>Hello {state.user?.email}</small><br/>Your Shopping Basket</h2>
			<FlipMove>
			{state.basket.map(({id, title, price, image, stars}) => (
				<div key={id} className='checkout-product'>
				    <img src={image} alt='product' />
				    <div className='checkout-product-info'>
						<p>{title}</p>
						<p>
						  <small>$</small>
						  <strong>{price}</strong>
						</p>
						<div className='product_stars'>
						  {Array(stars)
							.fill()
							.map(() => {
							  return <p>🌟</p>;
						  })}
						</div>
						<button
						 onClick={()=>removeProduct(id)}
						 className="remove-product">
							Remove
						</button>
				    </div>
				</div>
			))}
			</FlipMove>
		</div>
		<div className="checkout-right">
			<Subtotal />
		</div>
	</div>
  );
}

export default Checkout;
