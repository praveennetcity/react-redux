import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const total = useSelector(state => state.total)
  const loginDet = useSelector(state => state.loginDet);

  return (
    <div className="display">
      <h3>Total Component : {loginDet}</h3>
      <hr />
      <p> {total} </p>
    </div>
  )

}


export default Total;