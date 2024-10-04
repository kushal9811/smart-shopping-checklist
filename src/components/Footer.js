import React from 'react';

export default function Footer(props) {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 {props.title}. All rights reserved.</p>
      <div>
        <a href="#privacy" style={linkStyle}>Privacy Policy</a> | 
        <a href="#terms" style={linkStyle}> Terms of Service</a>
      </div>
    </footer>
  );
}
Footer.defaultProps = {
  title: "Your Company Name"
}

// Inline styles can be defined here
const footerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '10px',
  textAlign: 'center',
  position: 'relative',
  bottom: '0',
  width: '100%',
  boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
};

const linkStyle = {
  margin: '0 10px',
  textDecoration: 'none',
  color: '#333',
};
