import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <h1>{props.title}</h1>
      </div>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  title: "Your Company Name"
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
};

const logoStyle = {
  fontSize: '24px',
};

const linkStyle = {
  margin: '0 15px',
  textDecoration: 'none',
  color: '#fff',
};
