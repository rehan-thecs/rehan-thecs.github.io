import React from "react";
const Work = () => {
  return (
    <footer
      className="!w-full !h-[100Vh] !py-14 flex flex-col justify-between"
      id="contact"
    >
      <div className="row rowdies-light text-4xl !p-4 flex text-center justify-center items-center">
        <i className="fa-solid fa-face-smile !mr-2 !mt-1"></i> | Contact
      </div>
      <div className="contact-card flex col-span-4">
        <div className="card grid justify-center items-center">
          <div className="icon  !border-y-indigo-900 border-2 size-14 flex justify-center items-center rounded-[50%] bg-blue-900 !m-auto !my-8">
            <i className="fa-solid fa-location-dot fa-2xl"></i>
          </div>
          <h1 className="!py-2 font-semibold text-xl hover:text-[red]">
            Address
          </h1>
          <h3>Kanpur, India</h3>
        </div>
        <div className="card grid justify-center items-center">
          <div className="icon  !border-y-indigo-900 border-2 size-14 flex justify-center items-center rounded-[50%] bg-blue-900 !m-auto !my-8">
            <i className="fa-solid fa-phone fa-2xl"></i>
          </div>
          <h1 className="!py-2 font-semibold text-xl hover:text-[red]">
            Contact Number
          </h1>
          <h3>+91-7348111901</h3>
        </div>
        <div className="card grid justify-center items-center">
          <div className="icon  !border-y-indigo-900 border-2 size-14 flex justify-center items-center rounded-[50%] bg-blue-900 !m-auto !my-8">
            <i className="fa-solid fa-envelope fa-2xl"></i>
          </div>
          <h1 className="!py-2 font-semibold text-xl hover:text-[red]">
            Email Address
          </h1>
          <h3>rehan.thecs@gmail.com</h3>
        </div>
        <div className="card grid justify-center items-center">
          <div className="icon  !border-y-indigo-900 border-2 size-14 flex justify-center items-center rounded-[50%] bg-blue-900 !m-auto !my-8">
            <i className="fa-solid fa-earth-africa fa-2xl"></i>
          </div>
          <h1 className="!py-2 font-semibold text-xl hover:text-[red]">
            Download Resume
          </h1>
          <h3>
            <a href="#">Resume Link</a>
          </h3>
        </div>
      </div>

      <div className=" !mx-auto">
        <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 !py-16 border-gray-200">
          <li>
            <a href="#home" className="text-gray-800 hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" text-gray-800 hover:text-gray-900">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className=" text-gray-800 hover:text-gray-900">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className=" text-gray-800 hover:text-gray-900">
              Education
            </a>
          </li>
          <li>
            <a href="#work" className=" text-gray-800 hover:text-gray-900">
              Work
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className=" text-gray-800 hover:text-gray-900"
            >
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className=" text-gray-800 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
        <hr className="text-gray-200 !mb-6 " />
        <span className="text-lg text-gray-500 text-center block ">
          Designed with <i className="fa-solid fa-heart !text-[red]"></i> by
          <a href="#home" className="!text-[green] font-bold">
            TheCodeShot
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Work;
