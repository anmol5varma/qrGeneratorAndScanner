import React from 'react';
import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
import './footer.css';

const Footer = props => (
  <footer className="footer-footer" onClick={props.redirectBack}><p>{props.value}</p></footer>
);

Footer.propTypes = {
  value: PropTypes.string.isRequired,
  redirectBack: PropTypes.func,
};

Footer.defaultProps = {
  redirectBack: '',
};
export default Footer;
