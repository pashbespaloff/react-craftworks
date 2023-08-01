import React from 'react';
import H1 from "../../ui/Heading";
import Gallery from './Gallery/Gallery';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import galleryStyle from "./Gallery/Profile.module.css";
import cartStyle from "./ShoppingCart/Cart.module.css";

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