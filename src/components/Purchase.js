import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Purchase = () => {
  const Products = useSelector(state => state.products);
  const loginDet = useSelector(state => state.loginDet);

  const dispatch = useDispatch();

  const purchaseHandler = (e) => {
    let pName = e.target.options[e.target.selectedIndex].text;
    let price = e.target.value;
    let obj = { pName, price };
    console.log(obj);
    dispatch({ type: 'PURCHASE', payload: obj });
  }



  return (
    <div className="display">
      <h3>Purchase Component :  {loginDet}</h3>
      <hr />
      <select onChange={(e) => purchaseHandler(e)}>
        {
          Products.map((product, index) => {
            return (
              <option value={product.price} key={index}>
                {product.pName} - ${product.price}
              </option>
            )
          })
        }
      </select>

    </div>
  )

}


export default Purchase;