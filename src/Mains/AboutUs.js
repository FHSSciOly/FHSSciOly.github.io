import "./AboutUs.css";
import Header from "../Defaults/Header";
import "../fonts.css";
import about_us from "../Images/SciolyTeam.jpg";


import React from 'react';

const AboutUs = () => {
    
    
    return (
        <>
        <Header></Header>
        {/* <img src={about_us} alt="about us info image"></img> */}
        <main>
        <div id="top">
          <div id="what-is-scioly">
            {/* <h1 id="title">
              Fremont
              <p id="science-olympiad">Science Olympiad</p>
            </h1> */}

            <img src={about_us} id="team-pic" alt="place holder"></img>
          </div>
          <h2 id="who-are-we">
          The Fremont High School Science Olympiad program is a 
student-led organization founded in 2021. It strives to be an “umbrella” organization 
whose mission is to engage students and grow their passion for science and various STEM disciplines through teamwork, mentorship, leadership, research, learning, and competition. SciOly is a great platform to help students in our school explore different exciting STEM-related fields, discover their specific interests, and advance in them. our program makes stem opportunities more accessible for our diverse student body, promoting academic growth & pushing members to more advanced levels and classes; ultimately setting them toward excellence & success in their field(s) of interest.
Thanks to the FUHS Foundation's generous support, we were able to equip the teams with vital educational resources such as building materials, chemicals & equipment for experiments/labs, textbooks, registration for SciOly tournaments, and other Science Olympiad essentials - allowing our Fremont students to strive and succeed. 
          </h2>
          <h1>
          Thanks to the FUHS Foundation's generous support, we were able to equip the teams with vital educational resources such as building materials, chemicals & equipment for experiments/labs, textbooks, registration for SciOly tournaments, and other Science Olympiad essentials - allowing our Fremont students to strive and succeed. 
          </h1>
          {/* <a
            href="https://www.soinc.org/"
            target="_blank"
            rel="noreferrer"
            id="scioly-button"
          >
            More about SciOly
          </a> */}
        </div>
       

        {/* <div id="wiki-info">
          <h1 id="wiki-access">WIKI Access</h1>
          <p>
            Here are the WIKI's from our Two teams, Fremont White and Fremont
            Red
          </p>
          <div id="wiki-split">
            <div id="red-team">
              <p class="description">Fremont Red team</p>
              <a
                href="https://www.soinc.org/"
                target="_blank"
                id="scioly-button"
                rel="noreferrer"
              >
                Fremont Red WIKI
              </a>
            </div>
            <div id="white-team">
              <p class="description">Fremont White Team</p>
              <a
                href="https://www.soinc.org/"
                target="_blank"
                id="scioly-button"
                rel="noreferrer"
              >
                Fremont White WIKI
              </a>
            </div>
          </div>
        </div> */}

        {/* TODO: Add information about how to get to the wiki*/}
      </main>
        </>
    );
   
};

export default AboutUs;
