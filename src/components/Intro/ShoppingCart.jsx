import React, {useState} from 'react';
import initialProducts from './initialProducts';
import ShoppingCartElement from './ShoppingCartElement';
import style from "./Cart.module.css";

const ShoppingCart = () => {
  const [products, setProductCount] = useState(initialProducts);
  
  const getParentId = (e) => Number(e.target.parentElement.id);
  const updatedState = (e, sign) => {
    return products.map(product => 
      (product.id === getParentId(e)) 
        ? {...product, count : (sign === "+") ? product.count + 1 : product.count - 1}
        : product
    );
  };

  return (
    <ul>
      {
        (products.some(product => product.count > 0))
          ? products.map(product => (
            <ShoppingCartElement 
              key={product.id}
              element={product}
              plus={(e) => setProductCount(updatedState(e, "+"))}
              minus={(e) => setProductCount(updatedState(e, "-"))}
            />
          ))
          : <li><p className={style.empty}>the cart is empty...</p></li>
      }
    </ul>
  )
};

export default ShoppingCart;