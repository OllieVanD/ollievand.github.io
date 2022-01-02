import styles from '../assets/css/styles.module.css'
import React from "react";
import Body from "./Body.js";
import Portfolio from "./Portfolio.js";
import Footer from './Footer';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from 'react-router-dom';

const Header = () => {

    return (
    
      <>
      <div>
        <Router>
        <div className={styles.header}>
        
      <div className={styles.columnOne}>
        <p>
          <Link to="/">OllieVanD</Link>
          </p>
      </div>
      <div className={styles.columnFurther}>
        <p><Link to="/Goals">My Goals</Link></p>
      </div>
      <div className={styles.columnFurther}>
      <p><Link to="/Portfolio">Projects</Link></p>
      </div>
      <div className={styles.columnFurther}>
        <p><Link to ="AboutMe">About Me</Link></p>
      </div>
      </div>
      <Routes>
      <Route exact path="/" element={<Body />} />
      {/* <Route  path="/Goals" component={Body} /> */}
      <Route path="/Portfolio" element={< Portfolio/>} />
      </Routes>
      </Router>
    </div>
    
    </>
  );
  }


  export default Header;