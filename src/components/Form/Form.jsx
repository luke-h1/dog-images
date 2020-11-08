import React, { useState } from 'react';
import './Form.scss';
import axios from 'axios';
const Form = () => {
  const [text, setText] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if(text === '' | text === null) { 
      return; 
    }else { 
      searchDogs(text);
      setText('');
    }
  };

  const searchDogs = async (text) => { 
    const BASE_URL = `https://dog.ceo/api/breed/${text}/images/random/5`
    const res = await axios.get(`${BASE_URL}`)
    console.log(res.data)
  }
  const onChange = (e) => setText(e.target.value)

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
            onChange={onChange}
            className='form-input'
          />
          <input type='submit' value='Submit' className='btn'/> 
        </form>
        {/* add a clear button here */}
      </div>
    </>
  );
};
export default Form;
