import "./MTT.css";
import Header from "../Defaults/Header";
import "../fonts.css";
// import about_us from '/Users/sid/Documents/Programming/FHSSciOly.github.io/src/Images/SciolyTeam.jpg';

function MTT() {
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
          <h1>
          This is the leadership behind the team. 
         </h1>
         {/* Add images for each person after */}
         <h2>Brian - President</h2>
         <h2>Aarushi - Vice President</h2>
         <h2>Lakshmi - Vice President</h2>
         <h2>Kalash - Officer of Events</h2>
         <h2>Ritvik - Lead of Experimental Sceince and Labs</h2>
         <h2>Dhruv - Lead of Technology and Engineering</h2>
         <h2>Venkat - Lead of Academic Research and Mastery</h2>
         <h2>Aditi - Fundraising Officer</h2>
         <h2>Vid - Fundraising Officer</h2>
         <h2>Katherine - Treasurer</h2>
         <h2>Camilo - Secretary</h2>
         <h2>Amelie - Photographer</h2>
          
        </div>
    
      </main>
        </>
    );
}

export default MTT;