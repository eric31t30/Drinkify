import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import DrinkDetails from './pages/DrinkDetails';


function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/drink/:id" element={<DrinkDetails />}></Route>
    </Routes>
  );
}

export default App
