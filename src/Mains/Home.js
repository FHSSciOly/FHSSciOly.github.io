import "./Home.css";
import Header from "../Defaults/Header";
import "../fonts.css";

function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <div id="top">
          <div id="what-is-scioly">
            <h1 id="title">
              Fremont 
              <p id="science-olympiad">Science Olympiad</p>
            </h1>

            {/* <p id="who-are-we">
                The Fremont High School Science Olympiad program strives to be
                an “umbrella” organization whose mission is to engage students
                and grow their passion for science and various STEM disciplines
                through teamwork, mentorship, leadership, research, learning,
                and competition. SciOly is a great platform to help students in
                our school explore different exciting STEM-related fields,
                discover their specific interests, and advance in them. Besides
                expanding their knowledge, this is a great opportunity to boost
                members' grades and college applications, pushing them to more
                advanced levels and classes, and ultimately setting them toward
                success in their field(s) of interest.
              </p> */}
            <img src="../SciOlySymbol.png" id="scioly-symbol"></img>
          </div>
          <p id="who-are-we">
            The Fremont High School Science Olympiad program strives to be an
            organization whose mission is to engage students and grow their
            passion for science and various STEM disciplines through through
            teamwork, mentorship, leadership, research, learning, and
            competition.
          </p>
          <a href="https://www.soinc.org/" target="_blank" id="scioly-button">
            More about SciOly
          </a>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400" id="team-pic"></img>
        </div>

        <div id="wiki-info">
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
              >
                Fremont White WIKI
              </a>
            </div>
          </div>
        </div>

        {/* TODO: Add information about how to get to the wiki*/}
      </main>
    </>
  );
}

export default Home;
