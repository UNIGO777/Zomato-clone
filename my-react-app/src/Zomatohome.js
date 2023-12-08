/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './Zomato.css'
import { NavLink } from 'react-router-dom'
import handpng from './images/handphone (1).png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import City from './City.js'
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles
import Footer from './Footer.js'





const Zomatohome = () => {
  const [data, setdata] = useState('');
  const fun1 = (e) => {
    setdata(e.target.value);
    
  }
  return (
      <div>
        <img className='bg-image' src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png'></img>
      <div className='nav-bar'>
        <div className='nav-left'>
          <span className='nav-logo'><img src={handpng}></img></span>
            <h1>Get The App</h1>
        </div>
        <div className='nav-right'>
          <NavLink to={'Investor-Relations'} id='colur'>Investor Relations</NavLink>
          <NavLink to={'ViewFood'} id='colur'>View Food</NavLink>
          <NavLink to={'login'} id='colur'>Log in</NavLink>
          <NavLink to={'sing-up'} id='colur'>Sing up</NavLink>
        </div>
      </div>

      <div className='search'>
        <div className='search-bar'>
          <NavLink to={data}><FontAwesomeIcon icon={faSearch } className='icon' /></NavLink>
          <input placeholder='search for restaurant' value={data} onChange={fun1} />
        </div>
      </div>
      <div>
        <City />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Zomatohome