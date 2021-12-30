import styles from '../assets/css/styles.module.css'
import React from "react";

const Header = () => {
  const currDate = new Date().toLocaleDateString();

  return (
      <div className={styles.header}>
          <div className ={styles.column}> 
            <p >boyooo</p>
            </div>
            <div className ={styles.column}> 
            <p > {currDate} </p>
            </div>
            <div className ={styles.column}>  
            <p>random</p>
            </div>
            <div className ={styles.column}> 
            <p>random</p>
          </div>
        </div>
  );
}

export default Header;