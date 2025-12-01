import DrinkCard from './DrinkCard'
import '../styles/drink-list.css'

function DrinkList({ drinks }) {


  return (
    <section className='drink-list'>

      {drinks.map((item) => (
        <DrinkCard key={item.id} drink={item}/>
      ))}
        
    </section>
  );
}

export default DrinkList