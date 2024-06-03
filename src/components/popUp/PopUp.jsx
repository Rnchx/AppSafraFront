import React from 'react';
import styles from './pop.up.module.css';

const Popup = ({icon1, message, icon2, type}) => { 
    var color = (type === 'success') ? styles.success : styles.error;
    var mainDiv = styles.mainDiv + ' ' + color;
  return (
    <div className={mainDiv}>
      <p>{icon1}<span id={styles.message}>{message}</span>{icon2}</p>
    </div>
  );
};

export default Popup;