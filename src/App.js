import React from 'react';
import './App.css'; // Certifique-se de que o arquivo App.css existe
import Nav from './menu.js';
import Body from './body';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      
      <Nav />
      <Body />
      <Footer /> 
      

    </div>
  );
}

export default App;