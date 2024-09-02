import React from 'react'
import './Newssletter.css';

function Newsletter() {
  return (
    <div className='news-letter'>
      <h1>Get Exclusive Offers On your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email ID'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter;
