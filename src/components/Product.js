import React from "react";
import "../css/Product.css";
import {useStateValue} from '../StateProvider';

function Product({ id, title, price, stars, image }) {
	
	const [state, dispatch] = useStateValue();
	
	const addToCart = () => {
		dispatch({
			type: "ADD-TO-CART",
			payload: {
				id: id,
				title: title,
				price: price,
				stars: stars,
				image: image
			}
		});
	};
	
  return (
    <div key={id} className='product'>
      <div className='product_info'>
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
      </div>
      <img src={image} alt='product' />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
