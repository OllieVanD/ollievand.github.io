import styles from '../assets/css/styles.module.css'
import React from "react";

const Body = () => {
  return (
            <div className={styles.Banner}>
                <div className = {styles.mainText}>
                    <h2>Welcome to my portfolio page, my name is Oliver van der Reijden <br /> & here you can find a bunch of information about me including experience, 
                    <br /> education & all the projects I've worked on! 
                     </h2> 
                </div>


            </div>
  );
}

export default Body;