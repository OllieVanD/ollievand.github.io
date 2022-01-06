import styles from '../assets/css/styles.module.css'
import React from 'react'

const Portfolio = () => {
  return (
    <>

      <div className={styles.bgStructure}>
      <h1 id={styles.pageHeads}>Projects</h1>
        <p id={styles.introText}> Here you can find a list of all the projects I've worked on and the titles contain a link to the Github repositories. <br />
        I am currently in the process of updating and cleaning up some of the repositories, as well as updating this<br /> webpage to include more of my work.
         Also, check out the repository for this <a href ="https://github.com/OllieVanD/ollievand.github.io" id={styles.header}>webpage</a> too!</p>
        <div className={styles.pageText}>
        <h2><a href ="https://main.d37tv71uonakk1.amplifyapp.com/" id={styles.pageHeadsRef}>Cohort Display Page</a></h2>
        <p id={styles.desc}>During my time at Digital Futures Academy, we worked on a group project where the whole cohort of 18 people, were split up into groups of
            4 and 5 to work on different parts of the web application. The whole project was to upload a file containing information on the people within the cohorts,
            and then display that information for the file upload, each individual cohort, and every cohort as a whole. Below is a link to the API file upload part of the
            project which I was in charge of.</p>
        <h3><a href ="https://github.com/digital-futures-academy/atlas-api/tree/main/src/fileUpload" id={styles.pageHeadsRef}>API File Upload </a></h3>
        <h3 id={styles.pageHeads}>Lanuages Used</h3>
        <ul>
          <li>NodeJs - ExpressJs</li>
          <li>Testing Framework - Jasmine</li>
          <li>PostgreSQL</li>
          <li>Sequelize</li>
        </ul>
        <p id={styles.desc}>For our API part of the project, our goal was to receive an excel file from the front end, read the data and send it onto our file upload class.
            The fileUpload class would then check the contents of the file to ensure it was in the correct format, check the headings to see what type of file it was and then
            send it onto the corresponding class. The class would then check each cell ensuring it had the correct data, if there were any errors then they would be added to a list,
            once all cells had been checked a JSON would be sent it response. With either a list of errors, or a successful response, which would also be uploaded to the database. </p>
        <h3><a href ="https://github.com/digital-futures-academy/atlas-frontend/tree/main/src/components/Upload" id={styles.pageHeadsRef}>Front-end File Upload </a></h3>
        <h3 id={styles.pageHeads}>Lanuages Used</h3>
        <ul>
          <li>ReactJs - Class Components</li>
          <li>Testing Framework - Cypress</li>
        </ul>
        <p id={styles.desc}>For the Front-end side of the file upload project, we created an interface which would allow us to upload a csv file and then send it over to the API.
            If the file uploaded was of the correct format and had the right data in it, the displayed showing successful upload received from the JSON, otherwise it would display
            the errors from the file. We also created an interface which would show all the previous uploads made on the application and the success status of the upload.</p>
        <h2><a href ="https://github.com/OllieVanD/ExpressBuild" id={styles.pageHeadsRef}>Messaging Application</a></h2>
        <h3 id={styles.pageHeads}>Lanuages Used</h3>
        <ul>
          <li>HTML, CSS - Embedded JavaScript</li>
          <li>JavaScript - ExpressJs, Sequelize</li>
          <li>PostgreSQL</li>
        </ul>
        <p id={styles.desc}> For this project I was given 9 hours to try and complete an application using ExpressJs and a PostgreSQL database.
            I chose to create a messaging platform, where you would be able to register an account on the home page, login using
            those details and then send a message to anybody else who has also registered an account on the platform. Because
            I was explicitly trying to utilize Express and PostgreSQL I chose to enter each message into a database, rather than
            using the Javascript library Socket.IO which is used for messaging in real time.  </p>
        <h2><a href ="https://github.com/OllieVanD/chitter-challenge" id={styles.pageHeadsRef}>Chitter Challenge</a></h2>
        <h3 id={styles.pageHeads}>Lanuages Used</h3>
        <ul>
          <li>HTML, CSS - Embedded JavaScript</li>
          <li>JavaScript - ExpressJs, Sequelize</li>
          <li>PostgreSQL</li>
        </ul>
        <p id={styles.desc}>This challenge was meant to be a rip off of Twitter and was designed to allow users to register an account,
            login and then post to the page once they were logged in. The post will then show the username of the poster and allow users
            to comment on that post. Similarly to the messaging application, this was all done using ExpressJs, Embedded JavaScript and
            a PostgreSQL database.</p>
          <h2><a href ="https://github.com/OllieVanD/bank-challenge" id={styles.pageHeadsRef}>Bank Challenge</a></h2>
          <h3 id={styles.pageHeads}>Lanuages Used</h3>
          <ul>
            <li>NodeJs</li>
            <li>Testing Framework - Jasmine</li>
          </ul>
          <p id={styles.desc}>I undertook this challenege as part of Digital Futures academy, and was an extensive look at
            the TDD process, ensuring that we utilized both feature and unit testing throughout the development. This was one of my first projects
            utilizing the TDD process and user stories, following OOP specifically.</p>
        </div>
    </div>
    </>
  )
}

export default Portfolio
