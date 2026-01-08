import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./layout/MainLayout/MainLayout";
const Home = lazy(() => import("./pages/Home/Home"));
const DrinkDetails = lazy(() => import("./pages/DrinkDetails/DrinkDetails"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

import { applyThemeOnce } from './utils/SwitchColor'
import ProjectInfo from "./pages/ProjectInfo/ProjectInfo";

function App() {

  useEffect(() => {
    applyThemeOnce();
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/drink/:id" element={<DrinkDetails />} />
        <Route path="/project" element={<ProjectInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
