import styles from '../assets/css/styles.module.css'
import React from "react";
import L_I_Image from "../img/LinkedInLogo.jpg";
import GH_Image from "../img/GithubLogo.jpg";
import Email_Image from "../img/EmailLogo.jpg";

const Footer = () => {
  return (
        <div className ={styles.footer}> 
            <div className={styles.columnOne}>
                <a href = "https://www.linkedin.com/in/oliver-van-der-reijden-bb927913a">
                  <img src={L_I_Image} alt='LinkedIn Logo' className={styles.LogoSizing} />
                  </a>
                  <a href='https://github.com/OllieVanD'>
                <img src={GH_Image} alt='Github Logo' className={styles.LogoSizing} />
                </a>
                <a href='mailto: ollievdr@hotmail.com'>
                <img src={Email_Image} alt='Email Logo' className={styles.LogoSizing} />
                </a>
            </div>
            {/* <div className={styles.column}>
            <p > ellooo </p>
            </div> */}
            <div className={styles.columnFurther}>
            <p > ellooo </p>
            </div>
            <div className={styles.columnFurther}>
            <p > ellooo </p>
            </div>
          </div>
  );
}

export default Footer;