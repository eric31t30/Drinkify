import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import DrinkDetails from './pages/DrinkDetails';
import ScrollTop from './utils/ScrollTop';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Footer from './components/footer';


function App() {

  
  return (
    <>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/drink/:id" element={<DrinkDetails />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
