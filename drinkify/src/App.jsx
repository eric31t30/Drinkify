import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import DrinkDetails from './pages/DrinkDetails';
import ScrollTop from './utils/ScrollTop';
import Header from './components/Header';


function App() {

  
  return (
    <>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/drink/:id" element={<DrinkDetails />}></Route>
      </Routes>
    </>
  );
}

export default App
