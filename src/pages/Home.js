import React from "react";
import Header from "./../components/Header";
import QuestionAccordion from "./../components/QuestionAccordion";
// STYLE
import "./../css/Home.scss";
// ASSETS
import tv__img from "./../assets/images/tv.png";
import video__1 from "./../assets/videos/video1.m4v";
import dl__img from "./../assets/images/download.jpg";
import box__shot from "./../assets/images/boxshot.png";
import video__2 from "./../assets/videos/video2.m4v";
import comp__img from "./../assets/images/computer.png";
import profile__img from "./../assets/images/create_profile.png";

function Home() {
  return (
    <div className="home-container">
      {/*Header Section*/}
      <Header />
      {/*Main Container Section*/}
      <main className="main-section">
        <div className="section-container">
          <div className="left-column">
            <div>
              <h1>Enjoy on your TV.</h1>
              <h3>
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h3>
            </div>
          </div>
          <div className="right-column">
            <img src={tv__img} alt="Netflix TV" />
            <video className="video-1" autoPlay playsInline muted loop>
              <source src={video__1} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="section2-container">
          <div className="left-column">
            <img src={dl__img} alt="Netflix Download" />
            <div className="box">
              <img className="boxshot" src={box__shot} alt="Netflix Box Shot" />
              <label>Downloading...</label>
              <img
                className="download-gif"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt="Netflix Download"
              />
            </div>
          </div>
          <div className="right-column">
            <h1>Download your shows to watch offline.</h1>
            <h3>
              Save your favorites easily and always have something to watch.
            </h3>
          </div>
        </div>
        <div className="section-container">
          <div className="left-column">
            <div>
              <h1>Watch everywhere.</h1>
              <h3>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV without paying more.
              </h3>
            </div>
          </div>
          <div className="right-column vid-column2">
            <img src={comp__img} alt="Netflix Computer" />
            <video className="video-2" autoPlay playsInline muted loop>
              <source src={video__2} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="section2-container">
          <div className="left-column">
            <img src={profile__img} alt="Create Profile" />
          </div>
          <div className="right-column">
            <h1>Create profiles for kids.</h1>
            <h3>
              Send kids on adventures with their favorite characters in a space
              made just for them—free with your membership.
            </h3>
          </div>
        </div>
      </main>
      {/*FAQ Section*/}
      <QuestionAccordion />
      {/*Email Section*/}
    </div>
  );
}

export default Home;
