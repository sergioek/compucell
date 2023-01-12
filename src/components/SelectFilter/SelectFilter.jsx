import React from 'react'

export const SelectFilter = ({order}) => {
  return (
      <div className="selectFilter">
        <label>Ordenar:</label>
        <select onChange={order}>
            <option value="menor">Menor precio</option>
            <option value="mayor">Mayor precio</option>
        </select>
      </div>
  );
}
