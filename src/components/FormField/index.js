import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

let FormField = function ({ label, name, type, value, onChange }) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <div>
      <label>
        {label}: &nbsp;

        <input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

FormField = styled.input`
color: #141414;
font-size: 1.2rem;
display: flex;
flex-direction: column;
width: 50%;
min-height: 58px;
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