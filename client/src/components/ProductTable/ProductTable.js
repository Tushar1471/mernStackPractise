import React from "react";
import { ProductCategoryRows } from "../ProductCategoryRows/ProductCategoryRows";
import { ProductRows } from "../ProductRows/ProductRows";
export const ProductTable = ({ products, filterText, isStockOnly }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) == -1) {
      return;
    }

    if (!product.stocked && isStockOnly) {
      return;
    }

    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRows
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(
      <ProductRows
        price={product.price}
        isStockAvailable={product.stocked}
        name={product.name}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};
