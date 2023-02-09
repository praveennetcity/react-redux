import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const loginDet = useSelector(state => state.loginDet);

  const dispatch = useDispatch();

  const deleteHandlder = (index, price) => {
    dispatch({ type: 'DELETE', itemIndex: index, 'price': price })
  }

  return (
    <div className="display">
      <h3>Cart Component :  {loginDet}</h3>
      <hr />
      <ul>
        {
          cart.map((product, index) => {
            return (
              <li key={index} onClick={() => deleteHandlder(index, product.price)}>{product.pName}  </li>
            )
          })
        }
      </ul>
    </div>
  )

}


export default Cart;