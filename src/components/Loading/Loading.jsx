import React from 'react';
import loadingImage from '../../Images/Loading.gif';
import './Loading.scss';
const Loading = () => {
  return (
    <>
      <div className="loader-container">
        <img src={loadingImage} alt="Loading Icon" className="loader" />
      </div>
    </>
  );
};
export default Loading;
