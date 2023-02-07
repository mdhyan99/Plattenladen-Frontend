import { useEffect } from 'react';
import './App.css'
import { getProducts } from './api.js'

function App() {
  const fetchProducts = async () => {
    console.log(await getProducts());
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Plattenladen</h1>
    </div>
  )
}

export default App
