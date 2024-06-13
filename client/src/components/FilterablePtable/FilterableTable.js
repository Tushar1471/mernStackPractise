import { ProductTable } from "../ProductTable/ProductTable";
import { SearchBar } from "../SearchBar/SearchBar";
import "./filterTable.css";
import { Products } from "../../utilities/constants";
import { useState } from "react";

export const FilterableTable = () => {
  const [filterText, setFilterText] = useState("");
  const [isStockOnly, setIsStockOnly] = useState(false);
  return (
    <>
      {/* FIRSTLY I BUILD A STATIC VERSION. DO NOT IMMEDIATELY APPLYING INTERACTIVITY TO YOUR COMPONENTS,FIRST CREATE A STATIC VERSION THEN ADD INTERACTIVITY. */}
      <SearchBar
        filterText={filterText}
        onSetFilterText={setFilterText}
        isStockOnly={isStockOnly}
        onSetIsStockOnly={setIsStockOnly}
      />
      <ProductTable
        products={Products}
        filterText={filterText}
        isStockOnly={isStockOnly}
      />
    </>
  );
};
