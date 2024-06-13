import "./searchBar.css";
// import { useState } from "react";
export const SearchBar = ({
  filterText,
  onSetFilterText,
  isStockOnly,
  onSetIsStockOnly,
}) => {
  return (
    <>
      <div id="search_container">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search...."
            value={filterText}
            onChange={(e) => onSetFilterText(e.target.value)}
          />
          <label htmlFor="checkStock">
            <input
              type="checkbox"
              name="checkStock"
              id="checkStock"
              checked={isStockOnly}
              onChange={(e) => onSetIsStockOnly(e.target.checked)}
            />
            Only Show Products in Stock
          </label>
        </form>
      </div>
    </>
  );
};
