import React from "react";

export const ProductRows = ({ price, isStockAvailable, name }) => {
  return (
    <>
      <tr>
        <td>
          {isStockAvailable ? (
            name
          ) : (
            <span style={{ color: "red" }}>{name}</span>
          )}
        </td>
        <td>{price}</td>
      </tr>
    </>
  );
};
