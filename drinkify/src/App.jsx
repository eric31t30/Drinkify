import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./layout/MainLayout";
const Home = lazy(() => import("./pages/Home"));
const DrinkDetails = lazy(() => import("./pages/DrinkDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

import { applyThemeOnce } from './utils/SwitchColor'
import Loader from "./components/Loader";

function App() {

  useEffect(() => {
    applyThemeOnce();
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/drink/:id" element={<DrinkDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/loader" element={<Loader />} />
      </Route>
    </Routes>
  );
}

export default App;
