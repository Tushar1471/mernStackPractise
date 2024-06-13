import React from "react";

export const ProductCategoryRows = ({ category }) => {
  return (
    <>
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    </>
  );
};
