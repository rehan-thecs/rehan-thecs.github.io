import React from "react";
import "./style.css";

const Education = () => {
  return (
    <div
      className="education justify-center items-center text-white !p-6 !mt-4"
      id="education"
    >
      <div className="row h-[15%] rowdies-light text-4xl !p-4 flex text-center justify-center items-center">
        <i className="fa-solid fa-user-graduate !mr-2"></i> | My Education
      </div>
      <div className="list-education grid row  justify-center text-left items-cent er">
        <div className="card !mx-auto bg-white !rounded-xl shadow-md overflow-hidden !m-5 !w-[100%]">
          <div className="md:flex">
            <div className="img md:flex-shrink-0">
              <img
                className="!w-48 object-cover !md:w-48"
                src="/src/assets/educat/psit.png"
                alt="Event image"
              />
            </div>
            <div className="text !p-8">
              <div className="uppercase tracking-wide !text-xl !text-indigo-500 font-semibold">
                Bachelor of Technology
              </div>
              <p className="block !mt-3 !text-lg leading-tight font-medium !text-black">
                Pranveer Singh Institute of Technology, Kanpur
              </p>
              <p className="!mt-2 !text-gray-500">2023-2026 | Pursuing</p>
            </div>
          </div>
        </div>

        <div className=" !mx-auto bg-white !rounded-xl shadow-md overflow-hidden md:max-w-2xl !m-5 !w-[100%]">
          <div className="md:flex">
            <div className="img md:flex-shrink-0 items-center flex">
              <img
                className="!w-48 object-cover !md:w-48"
                src="/src/assets/educat/ignou.png"
                alt="Event image"
              />
            </div>
            <div className="text !p-8">
              <div className="uppercase tracking-wide !text-xl !text-indigo-500 font-semibold">
                Master of Arts (Economics)
              </div>
              <p className="block !mt-3 !text-lg leading-tight font-medium !text-black">
                Specialization in Data Analyst
              </p>
              <p className="block !mt-3 !text-lg leading-tight font-medium !text-black">
                INDIRA GANDHI NATIONAL OPEN UNIVERSITY (IGNOU)
              </p>
              <p className="!mt-2 !text-gray-500">2023-2025 | Pursuing</p>
            </div>
          </div>
        </div>

        <div className=" !mx-auto bg-white !rounded-xl shadow-md overflow-hidden md:max-w-2xl !m-5 !w-[100%]">
          <div className="md:flex">
            <div className="img md:flex-shrink-0">
              <img
                className="!w-48 object-cover !md:w-48"
                src="/src/assets/educat/gpk.png"
                alt="Event image"
              />
            </div>
            <div className="text !p-8">
              <div className="uppercase tracking-wide !text-xl !text-indigo-500 font-semibold">
                Diploma in Engineering (Production)
              </div>
              <p className="block !mt-3 !text-lg leading-tight font-medium !text-black">
                Government Polytechnic Kanpur, Kanpur Nagar
              </p>
              <p className="!mt-2 !text-gray-500">2020-2023 | completed</p>
            </div>
          </div>
        </div>

        <div className=" !mx-auto bg-white !rounded-xl shadow-md overflow-hidden md:max-w-2xl !m-5 !w-[100%]">
          <div className="md:flex">
            <div className="img md:flex-shrink-0 flex items-center">
              <img
                className="!w-48 object-cover !md:w-48"
                src="/src/assets/educat/CSJMU.png"
                alt="Event image"
              />
            </div>
            <div className="text !p-8">
              <div className="uppercase tracking-wide !text-xl !text-indigo-500 font-semibold">
                Bachelor of Art (Economics)
              </div>
              <p className="block !mt-3 !text-lg leading-tight font-medium !text-black">
                Chhatrapati Shahu Ji Maharaj University, Kanpur (CSJMU)
              </p>
              <p className="!mt-2 !text-gray-500">2020-2023 | completed</p>
            </div>
          </div>
        </div>

        <div className=" !mx-auto bg-white !rounded-xl shadow-md overflow-hidden md:max-w-2xl !m-5 !w-[100%]">
          <div className="md:flex">
            <div className="img md:flex-shrink-0">
              <img
                className="!w-48 object-cover !md:w-48"
                src="/src/assets/educat/hmes.png"
                alt="Event image"
              />
            </div>
            <div className="text !p-8">
              <div className="uppercase tracking-wide !text-xl !text-indigo-500 font-semibold">
                Senior Secondary School
              </div>
              <p className="block !mt-3 !text-lg leading-tight font-medium !text-black ">
                Halim Muslim English School, Kanpur (CBSE)
              </p>
              <p className="!mt-2 !text-gray-500 ">2020 | Completed</p>
            </div>
          </div>
        </div>

        <div className=" !mx-auto bg-white !rounded-xl shadow-md overflow-hidden md:max-w-2xl !m-5 !w-[100%]">
          <div className="md:flex">
            <div className="img md:flex-shrink-0">
              <img
                className="!w-48 object-cover !md:w-48"
                src="/src/assets/educat/hmes.png"
                alt="Event image"
              />
            </div>
            <div className="text !p-8">
              <div className="uppercase tracking-wide !text-xl !text-indigo-500 font-semibold ">
                Higher Secondary School
              </div>
              <p className="block !mt-3 !text-lg leading-tight font-medium !text-black ">
                Halim Muslim English School, Kanpur (CBSE)
              </p>
              <p className="!mt-2 !text-gray-500 ">2018 | Completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
