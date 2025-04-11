import "./AboutUs.css";
import Header from "../Defaults/Header";
import "../fonts.css";
import time_line from '../Images/timeline.jpg';

function Timeline() {

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

            <img src={time_line} alt="our milestones image"></img>
          </div>
          <h1>These are our Milestones.</h1>
          <h2>With the 22-23 year being our first full season after COVID, we've grown a lot and were able to establish a meaningful presence in our school community in the past four years.</h2>
          
        </div>
      
      </main>
        </>
    );
}

export default Timeline;