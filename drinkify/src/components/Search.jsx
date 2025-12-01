import { useState } from 'react';
import '../styles/search.css'

import seach from '/icons/search.svg'

function Search() {

  const [category, setCategory] = useState("all")
  const [level, setLevel] = useState("low")
  const [abv, setAbv] = useState(0);

  return (
    <div className="search">
      <div className="search-input-cont">
        <img className="search-icon" src={seach} alt="" />
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Buscar bebidas..."
        />
      </div>

      <div className="search-filter-cont search-filter-type">
        <h2 className="search-filter-title">Category</h2>

        <div className="search-filter-buttons">
          <div
            className={`search-button-type ${
              category === "all" ? "search-button-type-active" : ""
            }`}
            onClick={() => setCategory("all")}
          >
            Todos
            <span
              className={`search-border${
                category === "all" ? "search-no-border" : ""
              }`}
            ></span>
          </div>
          <div
            className={`search-button-type ${
              category === "cocktail" ? "search-button-type-active" : ""
            }`}
            onClick={() => setCategory("cocktail")}
          >
            cocktail
            <span
              className={`search-border${
                category === "cocktail" ? "search-no-border" : ""
              }`}
            ></span>
          </div>
          <div
            className={`search-button-type ${
              category === "no-alcohol" ? "search-button-type-active" : ""
            }`}
            onClick={() => setCategory("no-alcohol")}
          >
            sin alcohol
            <span
              className={`search-border${
                category === "no-alcohol" ? "search-no-border" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      <div className="search-filter-cont">
        <h2 className="search-filter-title">Nivel</h2>
        <div className="search-filter-buttons">
          <div
            className={`search-button-type ${
              level === "all" ? "search-button-type-active" : ""
            }`}
            onClick={() => setLevel("all")}
          >
            Todos
            <span
              className={`search-border${
                level === "all" ? "search-no-border" : ""
              }`}
            ></span>
          </div>
          <div
            className={`search-button-type ${
              level === "low" ? "search-button-type-active" : ""
            }`}
            onClick={() => setLevel("low")}
          >
            Bajo
            <span
              className={`search-border${
                level === "low" ? "search-no-border" : ""
              }`}
            ></span>
          </div>
          <div
            className={`search-button-type ${
              level === "mid" ? "search-button-type-active" : ""
            }`}
            onClick={() => setLevel("mid")}
          >
            Medio
            <span
              className={`search-border${
                level === "mid" ? "search-no-border" : ""
              }`}
            ></span>
          </div>
          <div
            className={`search-button-type ${
              level === "high" ? "search-button-type-active" : ""
            }`}
            onClick={() => setLevel("high")}
          >
            Alto
            <span
              className={`search-border${
                level === "high" ? "search-no-border" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      <div className="search-filter-cont">
        <div className="search-filter-abv-cont">
          <h2 className="search-filter-title">Nivel de alcohol</h2>
          <div className="search-abv">
            <p>{abv}%</p>
          </div>
        </div>

        <input
          className="search-filter-abv"
          type="range"
          min="0"
          max="100"
          value={abv}
          onChange={(e) => setAbv(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search