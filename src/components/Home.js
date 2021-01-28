import React from "react";
import Product from "./Product";
import "../css/Home.css";
import FlipMove from 'react-flip-move';

function Home() {
  return (
    <div className='home'>
      <img
        className='home_img'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA98lBLhlBk6Mrsw9MIDiAcVJh_kCJ75yoRA&usqp=CAU'
        alt='banner'
      />
      <FlipMove>
      <div className='product_row'>
        <Product
          id='1'
          title='parachute advanced coconut hair oil'
          price={11.5}
          stars={5}
          image='https://www.officechai.com/wp-content/uploads/2015/06/parachute.jpg'
        />
        <Product
          id='2'
          title='Maggi (taste bhi health bhi)'
          price={5.44}
          stars={4}
          image='https://www.officechai.com/wp-content/uploads/2015/06/maggi.jpg'
        />
      </div>
      <div className='product_row'>
        <Product
          id='3'
          title='Good Knight for deadly mosquito'
          price={45}
          stars={3}
          image='https://www.officechai.com/wp-content/uploads/2015/06/goodKnight.png'
        />
        <Product
          id='4'
          title='Dettol Clean Home best liquid'
          price={33.44}
          stars={4}
          image='https://www.officechai.com/wp-content/uploads/2015/06/dettol-500x500.jpg'
        />
        <Product
          id='5'
          title='Kurkure naughty tomato spicy tasty'
          price={34.88}
          stars={5}
          image='https://www.officechai.com/wp-content/uploads/2015/06/kurkure_naughty_tomato_115_gms.jpg'
        />
      </div>
      <div className='product_row'>
        <Product
          id='6'
          title='vicks vaporub new product'
          price={43.36}
          stars={4}
          image='https://www.officechai.com/wp-content/uploads/2015/06/vicks.jpg'
        />
      </div>
    </FlipMove>
    </div>
  );
}

export default Home;
