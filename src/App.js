import React from 'react';
import Cart from './components/Cart.js';
import Total from './components/Total.js';
import Purchase from './components/Purchase.js';
import Login from './components/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Purchase></Purchase>
      <Cart></Cart>
      <Total></Total>


    </div>
  );
}

export default App;
