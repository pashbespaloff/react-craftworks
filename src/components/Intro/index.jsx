import React from 'react';
import H1 from '../helpers/Heading';
import Gallery from './Gallery';
import ShoppingCart from './ShoppingCart';
import galleryStyle from "./Profile.module.css";
import cartStyle from "./Cart.module.css";

const Intro = () => {
  return (
    <>
      <div className={galleryStyle.gallery}>
        <H1 text="profiles gallery"/>
        <Gallery />
      </div>

      <div className={cartStyle.cart}>
        <H1 text="shopping cart"/>
        <ShoppingCart />
      </div>
    </>
  )
};

export default Intro;