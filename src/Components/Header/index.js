import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './header.css';

const Header = props => (
  <header><p>{props.value}</p></header>
);

Header.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Header;
