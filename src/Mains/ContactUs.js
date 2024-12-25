import "./ContactUs.css";
import Header from "../Defaults/Header";
import "../fonts.css";
// import about_us from '/Users/sid/Documents/Programming/FHSSciOly.github.io/src/Images/ContactImage.jpg';

function ContactUs() {
    return (
        <>
        <Header></Header>
        {/* <img src={about_us} alt="about us info image"></img> */}
        <main>
        <div id="top">
          <h1>This is our contact information. Use the below to make a direct message to us. </h1>
          <h2>Gmail: fremonthighscioly@gmail.com</h2>
          <h2>Instagram: @fremont_science_olympiad</h2>
          
          <form action="https://formsubmit.co/fremonthighscioly@gmail.com"  method="POST">
            <textarea type="email" name="email" placeholder="Email Address" required></textarea>
            <input type="hidden" name = "_next" value="../Home.js" ></input>
            <textarea id="tallerTextarea" name="tallerTextarea" cols="50" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
        <h3>Once you click submit and you see the Thank you page, click the back arrow to go back to the site.</h3>

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
    </div>
        
        
    
</main>
        </>
    );
}

export default ContactUs;

