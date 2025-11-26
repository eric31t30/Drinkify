
import './App.css'

import Hero from './components/Hero';

function App() {

  // const [drinks, setDrinks] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:3000/drinks")
  //     .then((res) => res.json())
  //     .then((data) => setDrinks(data));
  // }, []);

  return (
    <section className='app'>
      
      <Hero />

    </section>
  );
}

export default App
