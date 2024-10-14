/* eslint-disable no-restricted-globals */
import './style.css';

export const SearchField = ({ search, handleFiltroSearchField }) => {
  return (
    <div className='campo-busca'>
      <img src="lupa.png" alt="lupa" />
      <input type="text" className='input-filtro' placeholder='Pesquise aqui os pratos' value={search} onChange={() => handleFiltroSearchField(event.target.value)} />
    </div>
  );
};
