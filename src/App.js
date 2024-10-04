import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/item';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([
    { id: 1, itemName: 'Laptop', cost: 1000 },
    { id: 2, itemName: 'Smartphone', cost: 200 },
    { id: 3, itemName: 'Headphone', cost: 100 },
    { id: 4, itemName: 'Watch', cost: 50 }
  ]);

  const [newProduct, setNewProduct] = useState({ itemName: '', cost: '' });

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newProduct.itemName && newProduct.cost) {
      const newId = products.length + 1;
      setProducts([...products, { id: newId, itemName: newProduct.itemName, cost: newProduct.cost }]);
      setNewProduct({ itemName: '', cost: '' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Header title="ShopSmart" />
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="itemName"
                    placeholder="Product Name"
                    value={newProduct.itemName}
                    onChange={handleInput}
                  />
                  <input
                    type="number"
                    name="cost"
                    placeholder="Product Cost"
                    value={newProduct.cost}
                    onChange={handleInput}
                  />
                  <button type="submit" style={buttonStyle}>Add Product</button>
                </form>
              </div>
              <div>
                {products.map(product => (
                  <Item
                    key={product.id}
                    itemName={product.itemName}
                    cost={product.cost}
                    onDelete={() => handleDelete(product.id)}
                  />
                ))}
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer title="ShopSmart" />
      </div>
    </Router>
  );
}

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default App;
