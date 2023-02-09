import { createStore } from 'redux';

const initData = {
  products: [
    { pName: 'Apple', 'price': 300 },
    { pName: 'Oranage', 'price': 50 },
    { pName: 'Grapes', 'price': 80 },
    { pName: 'Banana', 'price': 20 }
  ],
  cart: [],
  total: 0,
  users: ['admin', 'manager', 'enduser'],
  loginDet: "none"

};

const reducer = (state = initData, action) => {
  console.log(action);
  if (action.type === 'PURCHASE') {
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + parseInt(action.payload.price)
    }
  }
  if (action.type === 'DELETE') {
    return {
      ...state,
      cart: state.cart.filter((i, index) => index !== action.itemIndex),
      total: state.total - parseInt(action.price)
    }
  }
  if (action.type === 'LOGIN') {
    return {
      ...state,
      cart: state.cart.filter((i, index) => index !== action.itemIndex),
      total: state.total,
      loginDet: action.loginDet
    }
  }


  return state;
}

const store = createStore(reducer);

export default store;