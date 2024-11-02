import "./ContactUs.css";
import Header from "../Defaults/Header";
import "../fonts.css";
import about_us from '/Users/sid/Documents/Programming/FHSSciOly.github.io/src/Images/ContactImage.jpg';

function ContactUs() {
    return (
        <>
        <Header></Header>
        <div className="AboutUs">
            <img src={about_us} alt="contact information image"></img>
        </div>
        </>
    )
}

export default ContactUs;