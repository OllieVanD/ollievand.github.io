import styles from '../assets/css/styles.module.css'
import React from 'react'

const Body = () => {
  return (
          <div className={styles.Banner}>
      <div className={styles.mainText}>
        <p>Welcome to my portfolio page, my name is Oliver van der Reijden, I{"'"}m currently looking for a back-end Junior
           Software Developer role, I'm particularly focused in NodeJS, but I'm open to learning different languages.
           Here you can find a bunch of information about me including experience,
           education & all the projects I{"'"}ve worked on.
        </p>
        <p>Please feel free to contact me via Email or LinkedIn.</p>
      </div>
      </div>
  )
}

export default Body
