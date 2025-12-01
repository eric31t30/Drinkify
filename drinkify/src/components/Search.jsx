import { useEffect, useState } from 'react';
import '../styles/search.css'

import search from '/icons/search.svg'

function Search({ localCategories, filters, setFilters}) {

  const[input, setInput] = useState("")

  
  const categories = [
    { label: "Todos", value: "all" },
    ...localCategories.map((cat) => ({
      label: cat,
      value: cat,
    })),
  ];

  const levels = [
    { label: "Todos", value: "all" },
    { label: "Bajo", value: "Bajo" },
    { label: "Medio", value: "Medio" },
    { label: "Alto", value: "Alto" },
  ];


  useEffect(() => {
    const id = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: input }));
    }, 150);

    return () => clearTimeout(id);
  }, [input]);

  return (
    <div className="search">
      <div className="search-input-cont">
        <img className="search-icon" src={search} alt="" />
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Buscar bebidas..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="search-filter-cont search-filter-type">
        <h2 className="search-filter-title">Category</h2>

        <div className="search-filter-buttons">
          {categories.map((cat) => (
            <div
              key={cat.value}
              className={`search-button-type ${
                filters.category === cat.value
                  ? "search-button-type-active"
                  : ""
              }`}
              onClick={() =>
                setFilters((prev) => ({ ...prev, category: cat.value }))
              }
            >
              {cat.label}
              <span
                className={`search-border ${
                  filters.category === cat.value ? "search-no-border" : ""
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>

      <div className="search-filter-cont">
        <h2 className="search-filter-title">Nivel de alcohol</h2>

        <div className="search-filter-buttons">
          {levels.map((lvl) => (
            <div
              key={lvl.value}
              className={`search-button-type ${
                filters.level === lvl.value ? "search-button-type-active" : ""
              }`}
              onClick={() =>
                setFilters((prev) => ({ ...prev, level: lvl.value }))
              }
            >
              {lvl.label}
              <span
                className={`search-border ${
                  filters.level === lvl.value ? "search-no-border" : ""
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search