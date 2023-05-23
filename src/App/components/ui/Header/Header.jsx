import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';

const initialState = {}
/**
 * header component
 * @param {any} props 
 * @returns react.Component header render
 */
const Header = (props) => {
  return (  
  <div className={styles.Header} data-testid="Header">
    <img src="https://img.icons8.com/?size=512&id=PjUpgs6o2IFx&format=png"/>
    Bienvenue sur le générateur de MEME
  </div>
)};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
