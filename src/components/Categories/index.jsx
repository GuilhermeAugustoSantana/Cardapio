import React from 'react';
import './style.css';


export const Categories = ({ handleFiltroCategori, buttonSelected }) => {
  return (
    <section className='categories'>
      <button className={buttonSelected === 'Entradas' ? 'acenderBt' : ''}
        onClick={() => handleFiltroCategori('Entradas')}>
        <img src="entrada.png" alt="entrada" />
        <span>Entradas</span>
      </button>
      <button className={buttonSelected === 'Massas' ? 'acenderBt' : ''}
        onClick={() => handleFiltroCategori('Massas')}>
        <img src="massa.png" alt="massa" />
        <span>Massas</span>
      </button>
      <button className={buttonSelected === 'Carnes' ? 'acenderBt' : ''}
        onClick={() => handleFiltroCategori('Carnes')}>
        <img src="carne.png" alt="carne" />
        <span>Carnes</span>
      </button>
      <button className={buttonSelected === 'Bebidas' ? 'acenderBt' : ''}
        onClick={() => handleFiltroCategori('Bebidas')}>
        <img src="bebidas.png" alt="bebidas" />
        <span>Bebidas</span>
      </button>
      <button className={buttonSelected === 'Saladas' ? 'acenderBt' : ''}
        onClick={() => handleFiltroCategori('Saladas')}>
        <img src="salada.png" alt="salada" />
        <span>Saladas</span>
      </button>
      <button className={buttonSelected === 'Sobremesas' ? 'acenderBt' : ''}
        onClick={() => handleFiltroCategori('Sobremesas')}>
        <img src="sobremesa.png" alt="sobremesa" />
        <span>Sobremesa</span>
      </button>
    </section>
  );
};
