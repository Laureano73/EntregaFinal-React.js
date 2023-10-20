import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Layout from './components/Layout/Layout'
import { CartProvider } from "../src/context/CartContext";
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout"


function App() {

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <main className="navbar-main">
            <Layout />
          </main>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/prod/:itemId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/Carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
