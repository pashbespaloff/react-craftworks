import React, {useState} from 'react';
import initialProducts from './initialProducts';
import ShoppingItem from './ShoppingItem';
import style from "./Cart.module.css";

export default function ShoppingCart() {
  const [products, setProductCount] = useState(initialProducts);
  
  const updatedState = (id, sign) => {
    return products.map(product => 
      (product.id === id) 
        ? {...product, count : (sign === "+") ? product.count + 1 : product.count - 1}
        : product
    );
  };

  return (
    <ul>
      {
        (products.some(product => product.count > 0))
          ? products.map(product => (
            <ShoppingItem 
              key={product.id}
              item={product}
              plus={() => setProductCount(updatedState(product.id, "+"))}
              minus={() => setProductCount(updatedState(product.id, "-"))}
            />
          ))
          : <li><p className={style.empty}>the cart is empty...</p></li>
      }
    </ul>
  )
};