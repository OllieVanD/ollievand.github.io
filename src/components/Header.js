import styles from '../assets/css/styles.module.css'
import React from 'react'
import Body from './Body.js'
import Portfolio from './Portfolio.js'
// import Goals from './Goals.js'
import AboutMe from './AboutMe.js'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'

const Header = () => {
  return (

      <>
      <div>
        <Router>
        <div className={styles.header}>

      <div className={styles.columnOne}>
        <p>
          <Link to="/" id={styles.header}>OllieVanD</Link>
          </p>
      </div>
      {/* <div className={styles.columnFurther}>
        <p><Link to="/Goals" id={styles.header}>My Goals</Link></p>
      </div> */}
      <div className={styles.columnFurther}>
      <p><Link to="/Portfolio" id={styles.header}>Projects</Link></p>
      </div>
      <div className={styles.columnFurther}>
        <p><Link to ="AboutMe" id={styles.header}>Experience</Link></p>
      </div>
      </div>
      <Routes>
      <Route exact path="/" element={<Body />} />
      {/* <Route path="/Goals" element={<Goals />} /> */}
      <Route path="/Portfolio" element={< Portfolio/>} />
      <Route path="/AboutMe" element={< AboutMe/>} />
      </Routes>
      </Router>
    </div>

    </>
  )
}

export default Header
