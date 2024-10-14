import React from 'react';
import './style.css';

export const Card = ({ produto }) => {
  const { nome, categoria, preco, imagem, descricao } = produto;
  return (
    <div className='card'>
      <img src={imagem} alt={nome} />
      <div className='container-description '>
        <h3>{nome}</h3>
        <small>{categoria}</small>
        <p>{descricao}</p>
        <span>{new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(preco)}</span>
      </div>
    </div>
  );
};
