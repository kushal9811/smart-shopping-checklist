import React from 'react';

export default function Item(props) {
  return (
    <div style={itemStyle}>
      <h3>{props.itemName}</h3>
      <p>Cost: ${props.cost}</p>
      <button onClick={props.onDelete} style={buttonStyle}>Delete</button>
    </div>
  );
}

const itemStyle = {
  backgroundColor: '#f9f9f9',
  padding: '15px',
  margin: '10px 0',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'centre',
  fontFamily: 'Arial, sans-serif',
};
const buttonStyle ={
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
}
