import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import DrinkDetails from "./pages/DrinkDetails";
import NotFound from "./pages/NotFound";

import { setRandomColors} from './utils/SwitchColor'

function App() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRandomColors(20000);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/drink/:id" element={<DrinkDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
