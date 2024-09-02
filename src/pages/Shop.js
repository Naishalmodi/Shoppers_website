import React from 'react'
import Hero from '../component/Hero/Hero';
import Popular from '../component/Popular/Popular';
import Offer from '../component/Offers/Offer';
import Newcollection from '../component/Newcollection/Newcollection';
import Newsletter from '../component/Newsletter/Newsletter';

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <Newcollection/>
        <Newsletter/>

    </div>
  )
}

export default Shop;
