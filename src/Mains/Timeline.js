import "./AboutUs.css";
import Header from "../Defaults/Header";
import "../fonts.css";
import time_line from '/Users/sid/Documents/Programming/FHSSciOly.github.io/src/Images/timeline.jpg';

function Timeline() {
    return (
        <>
        <Header></Header>
        
        <div className="AboutUs">
            <img src={time_line} alt="our milestones image"></img>
            <h1>These are our Milesotones.</h1>
            <h2>With the 22-23 year being our first full season after COVID, we've grown a lot and were able to establish a meaningful presence in our school community.</h2>
        </div>
        </>
    )
}

export default Timeline;