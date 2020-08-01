import React from 'react';
import styled from 'styled-components';

let FormField = function ({ rows, cols, label, name, type, value, onChange }) {
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



FormField = styled.input`
color: #141414;
font-size: 1.2rem;
display: flex;
flex-direction: column;
width: 50%;
height: 58px;
border-radius: 5px;
transition: border-color 0.3s ease 0s;
background: #ccc;
outline: 0px;
padding: 16px;
margin: 15px auto;

&:focus {
border-bottom-color: #2a7ae4;
}
`;

export default FormField;