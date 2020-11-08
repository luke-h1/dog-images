import React, { useState } from 'react';
import './Form.scss';
const Form = () => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="form-wrapper">
        <h2 className="form-title">Enter your favourite dog !</h2>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="search dogs! 🐶"
            value={text}
            className='form-input'
          />
          <input type='submit' value='Submit' className='btn' /> 
        </form>
        {/* add a clear button here */}
      </div>
    </>
  );
};
export default Form;
