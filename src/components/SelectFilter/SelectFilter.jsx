import React from 'react'

export const SelectFilter = ({order}) => {
  return (
    <div className="selectFilter">
      <label>Ordenar:</label>
      <select onChange={order}>
        <option value='asc'>
          Menor precio
        </option>
        <option value='desc'>
          Mayor precio
        </option>
      </select>
    </div>
  );
}
