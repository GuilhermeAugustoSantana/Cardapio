import React, { useState } from 'react';
import './style.css';
import { Categories } from '../Categories';
import { SearchField } from '../SearchField';
import { Card } from '../Card';
import { filtraProdutosPorCategoria, filtraProdutosPorTexto, produtosEntradas } from '../../services';

export const Home = () => {
  const [buttonSelected, setButtonSelected] = useState("Entradas");
  const [search, setSearch] = useState('');
  const [cardapio, setCardapio] = useState(produtosEntradas);

  const handleFiltroCategori = (filtroCategori) => {
    setSearch("")
    setButtonSelected(filtroCategori);
    setCardapio(filtraProdutosPorCategoria(filtroCategori));
  }

  const handleFiltroSearchField = (filtroSearchField) => {
    setSearch(filtroSearchField);
    setCardapio(filtraProdutosPorTexto(filtroSearchField));
  }

  return (
    <div>
      <header className='banner'>
        <img src="banner.png" alt="banner" />
        <div>
          <h1>RESTAURANT</h1>
          <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
        </div>
      </header>
      <main className='limitar-largura'>
        <Categories handleFiltroCategori={handleFiltroCategori} buttonSelected={buttonSelected} />
        <SearchField search={search} handleFiltroSearchField={handleFiltroSearchField} />

        <section className='section-cardapio'>
          <h2>Cardápio</h2>
          <div className='container-cards'>
            {cardapio.map((produto) => {
              return (
                <Card produto={produto} />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};
