import "./Home.css";
import Header from "../Defaults/Header";
import "../fonts.css";
import teamPhoto from "../Images/homeImage.jpg"
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

            <img
              src="../SciOlySymbol.png"
              id="scioly-symbol"
              alt="Sci Oly Symbol"
            ></img>
          </div>
          <p id="who-are-we">
            The Fremont High School Science Olympiad program strives to be an
            organization whose mission is to engage students and grow their
            passion for science and various STEM disciplines through through
            teamwork, mentorship, leadership, research, learning, and
            competition.
          </p>
          <a
            href="https://www.soinc.org/"
            target="_blank"
            rel="noreferrer"
            id="scioly-button"
          >
            More about SciOly
          </a>
        </div>
        <div>
          <img src={teamPhoto} id="team-pic" alt="place holder"></img>
        </div>

        <div id="wiki-info">
          <h1 id="wiki-access">WIKI Access</h1>
          <p>
            Here are the WIKI's for our team in total, Fremont Red, White, and Fremont
            Black
          </p>
          <div id="wiki-split">
            <div id="red-team">
              {/* <p class="description">Fremont Red team</p> */}
              <ul id="nav-link-holder">
              <li className="nav-link">
              <a href="/meettheteam">Fremont Team WIKI</a>
              </li>
              </ul>
            </div>
            {/* <div id="white-team">
                <ul id="nav-link-holder">
                 <li className="nav-link">
                 <a href="/meettheteam">Fremont White WIKI</a>
                 </li>
               </ul>
            </div> */}
          </div>
        </div>

        {/* TODO: Add information about how to get to the wiki*/}
      </main>
    </>
  );
}

export default Home;
