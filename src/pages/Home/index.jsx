import React from "react";
import "./style.css";
import LampPost from "../../components/lamppost";
import TypewriterEffect from "../../components/typewritter";
import DownloadButton from "../../components/resume";

const Home = () => {
  return (
    <div className="home h-[100vh]" id="home">
      <div className="sm-logo flex items-center justify-center !px-4 text-white text-[1.2rem] font-bold font-mono transition-all">
        <a href="#home" className="glow transition-all">
          TheCodeShot
        </a>
      </div>
      <div className="container flex align-middle justify-around !py-3 !mx-auto !px-2  border-[2px] border-[#241C2E] rounded-[30px] inset-shadow-sm inset-shadow-[#241C2E]">
        <div className="logo-box align-middle justify-start !px-4 text-white text-[1.5rem] text-left font-bold font-mono transition-all w-[40%]">
          <a href="#home" className="glow transition-all">
            TheCodeShot
          </a>
        </div>
        <div className="link-box w-[60%] flex align-middle justify-end">
          <ul className="flex items-center justify-evenly text-center text-white text-[1.2rem] transition-all w-full">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#experiance">Experiance</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="home-body flex justify-between align-middle">
        <div className="typriter flex">
          <div className="col1">
            <LampPost />
          </div>
          <div className="col2 text-left">
            <div className="profile-box w-full h-[250px]">
              <div className="row w-full">
                <h1 className="text-[2rem] font-bold text-left !tracking-[2px]">
                  Hi There,
                </h1>
              </div>
              <div className="row w-full">
                <h1 className="text-[2rem] font-bold text-left !tracking-[2px]">
                  I&apos;m Rehan
                </h1>
              </div>
              <TypewriterEffect />
              <div className="row w-full">
                <div className="social-icon">
                  <ion-icon name="logo-linkedin"></ion-icon>
                  <ion-icon name="logo-github"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <ion-icon name="logo-twitter"></ion-icon>
                </div>
              </div>
              <DownloadButton />
            </div>
          </div>
        </div>
        <div className="col3 w-[25%] flex items-center justify-center">
          <img
            className="square-img w-80"
            src="./src/assets/logo/Rehan.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
