/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './NotFound.css'

const NotFound = () => {
  return (
      <div>
          <div className='line'>
              <div className='error'>404</div></div>
          <div className='text'><span>Page Not Found</span></div>
          <div className='text-2'>Sorry! We couldn't find the page</div>
          <div className='b'>
              <Link to={'/'}><button className='button'>
                  <FontAwesomeIcon icon={faHome} style={{ color: '#ffffff' }} />
                  <span>GO BACK TO HOME</span>
              </button></Link>
          </div>
    </div>
  )
}

export default NotFound