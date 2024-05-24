import React from 'react';
import './Body.css';
import Fundo from './Design sem nome (3).png';

function Body() {
  return (
    <div className="foto">
      <img src={Fundo} alt="Imagem" className='anaila' />
      <button className='botao'>Agende sua instalação agora!</button>
  </div>
  );
}

export default Body;