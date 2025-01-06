import "./Gallery.css";
import Header from "../Defaults/Header";
import "../fonts.css";
import about_us from '../Images/SciolyTeam.jpg';

function Gallery() {
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

          </div>
          <h1>These are our Photos and Gallary page with all photos  of competitions and our progressions.</h1>
          <img src={about_us} alt="our milestones image"></img>
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
}

export default Gallery;