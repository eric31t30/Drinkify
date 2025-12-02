import DrinkCard from './DrinkCard'
import '../styles/drink-list.css'

import lemon from '/icons/lemon.svg'

function DrinkList({ drinks }) {


  return (
    <section className="drink-list">
      <div className="drinks-quantity-cont">
        <p className="drinks-quantity-1">Resultados</p>
        <p className="drinks-quantity-2">{drinks.length}</p>
        <p className="drinks-quantity-3">Bebidas encontradas</p>

        <img className="drinks-quantity-icon" src={lemon} alt="" />
      </div>

      {drinks.map((item) => (
        <DrinkCard key={item.id} drink={item} />
      ))}
    </section>
  );
}

export default DrinkList