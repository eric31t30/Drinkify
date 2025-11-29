import React, { useEffect, useState } from 'react'
import DrinkCard from './DrinkCard'
import '../styles/drink-list.css'

function DrinkList() {

  const [drinks, setDrinks] = useState([])

  // const base = "https://drinkify-backend.onrender.com/"
  

  useEffect(() => {
    fetch(`http://localhost:3000/drinks`)
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);

  useEffect(() => {
    console.log(drinks);
    
  }, [drinks])
  

  return (
    <section className='drink-list'>

      {drinks.map((item) => (
        <DrinkCard key={item.id} drink={item}/>
      ))}
        
    </section>
  );
}

export default DrinkList