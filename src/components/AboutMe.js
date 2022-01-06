import styles from '../assets/css/styles.module.css'
import React from 'react'

const AboutMe = () => {
  return (
    <>

      <div className={styles.bgStructure}>
        <div className={styles.pageText}>
          <h1 id={styles.pageHeads}>Experience</h1>
        <h2 id={styles.pageHeads}>Programming Experience</h2>
        <h3 id={styles.pageHeads}>JavaScript</h3>
          <ul>
            <li>NodeJs - This has been my preffered back-end programming lanuage, which I have around 6 months experience using.</li>
            <li>Browser - Have used a variety of different web based JS features, including jQuery, AJAX and JSON to name a few.</li>
            <li>React - Have created a few different web pages using React(including this page!), using both class and functional components</li>
            <li>ExpressJs - Used this framework for interactive routing for a few different web pages, as well as setting up an active API to receive a request and send a JSON in response.</li>
            <li>Sequelize - Used to set up and communicate with a Postgres database on a few different applications.</li>
          </ul>
          <h3 id={styles.pageHeads}>Java</h3>
          <ul>
            <li>Completed the Java SE 8 Associate certification and have a good understanding of the principles, but haven{"'"}t used much in practice.</li>
          </ul>
          <h3 id={styles.pageHeads}>C#</h3>
          <ul>
            <li>Have around 6 months experience and was my first introduction to an OOP programming language.</li>
            <li>Created a text summarizer, which read a large body of text and converted it all into one sentence based on the populartity of a word. This was my first large project, and did a better job of throwing out nonsense, rather than a summarized sentence!</li>
          </ul>
          <h3 id={styles.pageHeads}>HTML & CSS</h3>
          <ul>
            <li>Have used many times on a variety of projects.</li>
          </ul>
          <h3 id={styles.pageHeads}>SQL</h3>
          <ul>
            <li>MySQL & PostgreSQL</li>
            <li>Have created, managed and interacted with databases using both a CLI and GUI.</li>
            <li>Experience setting up tables with different relational models.</li>
          </ul>
          <h3 id={styles.pageHeads}>Command-Line Interfaces</h3>
          <ul>
            <li>Git Bash - Have a lot of experience using this to set-up and work on different Github repositories, including personal and group projects.</li>
            <li>Powershell - Experience using this to compile and run Java projects.</li>
            <li>Linux - Have set up and managed my own virtual Linux environment, including setting up mail servers, changing user/group access and various other tasks as part of a module for my PostGraduate degree.</li>
          </ul>
          <h3 id={styles.pageHeads}>Agile - Scrum </h3>
          <p id={styles.desc}>During a group project for Digital Futures Academy, the whole cohort of 18 people was split into 5 teams, and our goal was to produce a large codebase (described more in projects) over two weeks.
              We were then giving sprints to work on in our teams, where we regularly reviewed our process of designing, producing and improving our code. I managed our team and delegated the sprints, with regular code reviews
              to ensure our code was cohesive and of a high standard.</p>
          <h2 id={styles.pageHeads}>Work Experience</h2>
          <h3 id={styles.pageHeads}>Software Engineer</h3>
          <h3 id={styles.pageHighlight}>Digital Futures Academy</h3>
          <h4 id={styles.pageHighlight}>01/06/2021 - 01/10/2021</h4>
          <ul>
            <li>Created a bunch of different web projects using HTML, CSS and React for the frontend.</li>
            <li>As well as using NodeJs for the backend, utilizing Express frameworks to create API's, as well as Sequelize to interact with a PostgreSQL database.</li>
            <li>Utilized a test-driven development cycle throughout the academy and practiced working in an agile development cycle in a group project.</li>
            <li>Worked in a group project where we broke up into smaller teams, mainly took charge during the smaller groups, but also ensured that other people took charge to learn as much as possible during the process.</li>
            <li>Practiced pair-programming several times throughout the academy.</li>
          </ul>
          <h3 id={styles.pageHeads}>Transmission Systems Operator</h3>
          <h3 id={styles.pageHighlight}>Gas Management Service Limited</h3>
          <h4 id={styles.pageHighlight}>15/06/2019 - 01/06/2021</h4>
          <ul>
            <li>Controlling and maintaining a variety of different pipelines and gas storage sites in the European Gas network.</li>
            <li>Working with a variety of different software, providing feedback to various IT teams to help maintain the development.</li>
            <li>Dealing with various customers, sometimes in high pressure situations to ensure the pipelines are managed safely and effectively while maintaining industry regulations.</li>
            <li>Maintaining a high level of concentration and problem-solving over a long period of time, to ensure that all network issues are solved over a 24/7 period, including working night shifts.</li>
          </ul>
          <h2 id={styles.pageHeads}>Education</h2>
          <h3 id={styles.pageHeads}>MSc: Information & Communication Technology</h3>
          <ul>
          <p>I chose to pursue an opportuninity with Digital Futures Academy, rather than completing my masters, I still am yet to complete my final project, which is something I may revisit in the future.</p>
              <p>10/01/2020 - 10/06/2021 <br />
              Anglia Ruskin University <br/>
              Modules including: Developing Web Applications (75%), Software Implementation (62%), Computer Systems and Servers (88%), Secure Systems (77%) and Research Methods (60%).</p>
          </ul>
          <h3 id={styles.pageHeads}>BA Hons: Accounting And Management</h3>
          <ul>
          <p> 10/09/2016 - 16/06/2019<br />
              University of Reading <br />
              Grade: 2:2</p>
          </ul>
      </div>
    </div>
    </>
  )
}

export default AboutMe
