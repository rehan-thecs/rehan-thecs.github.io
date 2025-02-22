import React from "react";
import "./style.css";
import DownloadButton from "../../components/know_me";

const About = () => {
  return (
    <div
      className="about !h-[100vh] justify-center items-center text-white p-6"
      id="about"
    >
      <div className="row1 h-[15%] rowdies-light text-4xl !p-4 flex text-center justify-center items-center">
        <i className="fa-regular fa-user !mr-2"></i> | About Me
      </div>
      <div className="row2 flex items-center justify-around">
        <div className="col1 w-[40%]">
          <img
            className="w-[25rem] !m-auto shadow-[0 0 10px 1px rgba(0, 0, 0, 0.25);]"
            src="/src/assets/logo/Rehan3.png"
            alt=""
          />
        </div>
        <div className="col2 w-[60%] text-left">
          <h1 className="text-2xl font-bold">I&apos;m Rehan</h1>
          <h3 className="text-xl">Web & App Developer</h3>
          <br />
          <p className="text-left">
            I am a B.Tech student at Pranveer Singh Institute of Technology
            (PSIT), Kanpur, specializing in Computer Science. I am proficient in
            programming languages such as HTML, CSS, JavaScript, PHP, MySql, C,
            Java and Python. I have experience in data structures, algorithms,
            Web Development and software development. I am also familiar with
            cloud computing, machine learning, and artificial intelligence.
          </p>
          <br />
          <h4>
            <bold className="font-bold !text-[#10b981]">Phone :</bold> +91 -
            7348111901
          </h4>
          <br />
          <h4>
            <bold className="font-bold !text-[#e63946]">Email : </bold>
            rehan.thecs@gmail.com
          </h4>
          <br />
          <h4>
            <bold className="font-bold !text-[#9333ea]">Place :</bold> Kanpur,
            Uttar Pradesh, India - 208001
          </h4>
          <br />
          <br />
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};
export default About;
