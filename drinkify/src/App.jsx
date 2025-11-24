import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/drinks")
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);

  return (
    <div>
      <h1>Drinkify 🍹</h1>

      <div>

      {drinks.map(data => (
        <div key={data.id}>{data.name}</div>
      ))}

      </div>
    </div>
  );
}

export default App
