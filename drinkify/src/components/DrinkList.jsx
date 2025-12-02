import DrinkCard from './DrinkCard'
import '../styles/drink-list.css'

import lemon from '/icons/lemon.svg'

function DrinkList({ drinks }) {


  return (
    <section className="drink-list">

      <header className="drink-list__header">
        <h2 className="drink-list__title">
          <span className='drink-list__results'>Resultados</span> 
          <span className="drink-list__count">{drinks.length}</span> 
          bebidas encontradas
        </h2>

        <img className="drink-list__icon" src={lemon} alt="Icono de limón" />
      </header>

      {drinks.map((item) => (
        <DrinkCard key={item.id} drink={item} />
      ))}
    </section>
  );
}

export default DrinkList