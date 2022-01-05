import styles from '../assets/css/styles.module.css'
import React from 'react'
import liImage from '../img/LinkedInLogo.jpg'
import ghImage from '../img/GithubLogo.jpg'
import emailImage from '../img/EmailLogo.jpg'

const Footer = () => {
  return (
        <div className ={styles.footer}>
            <div className={styles.columnOne}>
                <a href = "https://www.linkedin.com/in/oliver-van-der-reijden-bb927913a">
                  <img src={liImage} alt='LinkedIn Logo' className={styles.LogoSizing} />
                  </a>
                  <a href='https://github.com/OllieVanD'>
                <img src={ghImage} alt='Github Logo' className={styles.LogoSizing} />
                </a>
                <a href='mailto: ollievdr@hotmail.com'>
                <img src={emailImage} alt='Email Logo' className={styles.LogoSizing} />
                </a>
            </div>
          </div>
  )
}

export default Footer
