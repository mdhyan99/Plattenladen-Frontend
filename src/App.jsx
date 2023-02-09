import { useEffect } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.scss'
import { getProducts } from './api.js'
import Header from './components/Header/Header';
import Main from './views/Main';
import Cart from './views/Cart';
import Login from './views/Login';
import Checkout from './views/Checkout';
import Account from './views/Account';
import Error404 from './views/Error404';

function App() {
  const fetchProducts = async () => {
    console.log(await getProducts());
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
