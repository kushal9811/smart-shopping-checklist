import React from 'react';

export default function Header(props) {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <h1>{props.title}</h1>
      </div>
      <nav>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#contact" style={linkStyle}>Contact</a>
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
