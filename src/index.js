import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const style = {
  backgroundColor: 'black',
  color: 'aqua',
  fontSize: 24, // Default unit is px
  padding: '1rem', // Use strings for other units
  height: '100vh', // Set height to 100% of viewport height
  width: '100vw' // Set width to 100% of viewport width
};
root.render(
  <React.StrictMode >
    <div style={{ ...style, position: 'absolute', top: 0, left: 0 }}>
      <App />
    </div>
  </React.StrictMode>
);

