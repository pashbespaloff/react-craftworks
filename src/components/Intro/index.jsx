import React from 'react';
import H1 from '../helpers/Heading';
import Gallery from './Gallery';
import ShoppingCart from './ShoppingCart';
import galleryStyle from "./Profile.module.css";
import cartStyle from "./Cart.module.css";

export default function Intro () {
  return (
    <>
      <div className={galleryStyle.gallery}>
        <H1>profiles gallery</H1>
        <Gallery />
      </div>

      <div className={cartStyle.cart}>
        <H1>shopping cart</H1>
        <ShoppingCart />
      </div>
    </>
  )
};