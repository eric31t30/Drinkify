import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import DrinkDetails from "./pages/DrinkDetails";
import ScrollTop from "./utils/ScrollTop";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer";

import { setRandomColors} from './utils/SwitchColor'

function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRandomColors(20000);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

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

export default App;
