import React from "react";
import "../css/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useStateValue} from '../StateProvider';
import {auth} from '../firebase.config';

function Header() {
	
  const [state, dispatch] = useStateValue();
	
  const handleAuthentication = () => state.user ? auth.signOut() : '' ;

  return (
    <>
      <nav className='header'>
        <Link to='/'>
          <img
            className='header_logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='amazon_logo'
          />
        </Link>
        <div className='header_search'>
          <input type='text' className='header_search_input' />
          <SearchIcon className='header_search_icon' />
        </div>

        <div className='header_nav'>
          <Link to={!state.user ? '/login' : ''} className='header_link'>
            <div  onClick={handleAuthentication} className='header_option'>
              <span>Hello {state.user?.displayName ? state.user?.displayName : 'Guest'}</span>
              <span>{state.user ? 'Sign Out' : 'Sign In' }</span>
            </div>
          </Link>

          <Link to='/' className='header_link'>
            <div className='header_option'>
              <span>Returns</span>
              <span>& Orders</span>
            </div>
          </Link>

          <Link to='/' className='header_link'>
            <div className='header_option'>
              <span>Your</span>
              <span>Prime</span>
            </div>
          </Link>

          <Link to='/checkout' className='header_link'>
            <div className='header_option_basket'>
              <ShoppingBasketIcon />
              <span>{state.basket.length}</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
