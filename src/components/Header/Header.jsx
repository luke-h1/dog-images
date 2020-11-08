import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Header = ({ title }) => {
  return (
    <>
      <header className="header">
        <div className="header-title-container">
          <h1>
            <Link to="/" className="header-link">
              {title}
            </Link>
          </h1>
        </div>
        <div className="header-container">
          <Link to="/about" className="header-about-link">
            About
          </Link>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {
  title: 'Dog Images 🐶',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
