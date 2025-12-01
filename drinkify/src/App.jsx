
import { useEffect, useState } from 'react';
import './App.css'
import DrinkList from './components/DrinkList';
import Footer from './components/footer';

import Hero from './components/Hero';
import Search from './components/Search';

function App() {

  const [drinks, setDrinks] = useState([])  

  useEffect(() => {
    fetch(`http://localhost:3000/drinks`)
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);
  
  useEffect(() => {
    console.log(drinks);
    
  }, [drinks])

  return (
    <section className="app">

      <Hero />
      <Search />
      <DrinkList drinks={drinks}/>
      <Footer />

    </section>
  );
}

export default App
