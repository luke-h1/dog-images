import React, { useState } from 'react';
import './Form.scss';
import axios from 'axios';
import PropTypes from 'prop-types';
import Loading from '../Loading/Loading';
const Form = ({ title }) => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '' || text === null) {
      return;
    } else {
      searchDogs(text);
      setText('');
    }
  };

  const clearDoggos = () => {
    setText('');
    setData('');
    setLoading(false);
  };

  const searchDogs = async (text, i) => {
    setLoading(true);
    const BASE_URL = `https://dog.ceo/api/breed/${text}/images/random/5`;
    const res = await axios.get(`${BASE_URL}`);
    console.log(res.data);
    setLoading(false);

    const results = res.data.message.map((dog) => (
      <img src={dog} className="doggo-image" alt="dogs" />
    ));

    setData(results);
  };
  const onChange = (e) => setText(e.target.value);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="form-wrapper">
        <h2 className="form-title">{title}</h2>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="search dogs! 🐶"
            value={text}
            onChange={onChange}
            className="form-input"
          />
          <input type="submit" value="Submit" className="btn" />
        </form>
        {data.length > 0 && (
          <button className="clear-btn" onClick={clearDoggos}>
            Clear Results
          </button>
        )}
        <div className="doggo-container">{data}</div>
      </div>
    </>
  );
};

Form.defaultProps = {
  title: 'Enter your favourite dog !',
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Form;
