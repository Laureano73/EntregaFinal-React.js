import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import data from './inventario.json';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Category from './pages/category';

function App() {
  const [productos, setProductos] = useState([]);

  const getData = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  }

  useEffect(() => {
    getData()
      .then((res) => {
        setProductos(res);
      });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <main className="navbar-main">
          <NavBar />
        </main>
        <Routes>
          <Route path="/" element={<ItemListContainer products={productos} />} />
          <Route path="/prod/:itemId" element={<ItemDetailContainer productos={productos} />} />
          <Route path="/category/:categoryId" element={<Category productos={productos}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
