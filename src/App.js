import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Item from './components/item';
import React from 'react'
import { useState } from 'react'

function App() {
  const [products, setProducts] = useState([
    {id : 1 , itemName: 'Laptop' , cost : 1000},
    {id : 2 , itemName: 'Smartphone' , cost : 200},
    {id : 3 , itemName: 'headphone' , cost : 100},
    {id : 4 , itemName: 'Watch' , cost : 50}
  ]);
  const [newProduct, setNewProduct] = useState({itemName:'',cost:''});
  const handledelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };
  const handleinput = (e) => {
    const {name , value} = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    if(newProduct.itemName && newProduct.cost){
      const newId = products.length + 1;
      setProducts([...products , {id: newId, itemName: newProduct.itemName, cost: newProduct.cost}]);
      setNewProduct({itemName: '',cost: ''});
    }

  }
  return (
    <div className="App">
      <Header title = "ShopSmart"/>
      <div>
          <form onSubmit={handlesubmit}>
            <input type = "text" name = "itemName" placeholder="Product Name" value={newProduct.itemName} onChange={handleinput}/>
            <input type = "number" name = "cost" placeholder="Product Cost" value = {newProduct.cost} onChange={handleinput}/>
            <button type = "submit" style={buttonStyle}>Add Product</button>
          </form>
      </div>
      <div>
        {
          products.map(product => (
            <Item 
            key = {product.id} 
            itemName = {product.itemName} 
            cost = {product.cost} 
            onDelete = {()=>handledelete(product.id)}
            />
          ))
        }
      </div>
      <Footer title = "ShopSmart"/>
    </div>
  );
}
const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
}
export default App;
