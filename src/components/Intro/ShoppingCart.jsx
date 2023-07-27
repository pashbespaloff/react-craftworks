import React, {useState} from 'react';
import initialProducts from './initialProducts';
import ShoppingCartElement from './ShoppingCartElement';

const ShoppingCart = () => {
  const [products, setProductCount] = useState(initialProducts);
  
  const getParentId = (e) => Number(e.target.parentElement.id);
  const updatedState = (e, sign) => {
    return products.map(product => 
      (product.id === getParentId(e)) 
        ? {...product, count : (sign === "+") ? product.count + 1 : (product.count > 0) ? product.count - 1 : 0} 
        : product
    );
  };

  return (
    <ul>
      {
        products.map(product => (
          <ShoppingCartElement 
            key={product.id} 
            element={product}
            plus={(e) => setProductCount(updatedState(e, "+"))}
            minus={(e) => setProductCount(updatedState(e, "-"))}
          />
        ))
      }
    </ul>
  )
};

export default ShoppingCart;