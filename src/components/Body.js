import styles from '../assets/css/styles.module.css'
import React from "react";

const Body = () => {
  return (
          <div className={styles.Banner}>
      <div className={styles.mainText}>
        <p>Welcome to my portfolio page, my name is Oliver van der Reijden & here you can find a bunch of information about me including experience,
           education & all the projects I've worked on! 
        </p>
      </div>
      </div>
  );
}

export default Body;