import React from 'react';
import MyComponent from './MyComponent';
import Hellow from './Hellow';
import './App.css';

function App() {
  const total = { name: "kang", age: 10, tail: 300 };
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  };

  return (
    <>
      <div style={style} className="App">
        <p>練習</p>
        <MyComponent />
        <div className="gray-box">
          <Hellow />
          <div>
            <p>name: {total.name}</p>
            <p>age: {total.age}</p>
            <p>tail: {total.tail}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
