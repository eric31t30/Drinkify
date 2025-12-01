
import './App.css'
import DrinkList from './components/DrinkList';
import Footer from './components/footer';

import Hero from './components/Hero';
import Search from './components/Search';

function App() {

  return (
    <section className="app">

      <Hero />
      <Search />
      <DrinkList />
      <Footer />

    </section>
  );
}

export default App
