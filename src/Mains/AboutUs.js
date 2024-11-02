import "./AboutUs.css";
import Header from "../Defaults/Header";
import "../fonts.css";
import about_us from '/Users/sid/Documents/Programming/FHSSciOly.github.io/src/Images/SciolyTeam.jpg';

function AboutUs() {
    return (
        <>
        <Header></Header>
        <div className="AboutUs">
            <img src={about_us} alt="this is the about us image"></img>
        </div>
        </>
    )
}

export default AboutUs;