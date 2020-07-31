import React from 'react';

function FormField({ rows, cols, label, name, type, value, onChange }) {
  return (
    <div>
      <label>
        {label}: &nbsp;

        <input
          type={type}
          rows={rows}
          cols={cols}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default FormField;