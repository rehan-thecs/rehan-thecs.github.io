import React from "react";
import "./style.css";

const Work = () => {
  return (
    <div
      className="work justify-center items-center text-white !p-6 !mt-4"
      id="work"
    >
      <div className="row1 h-[15%] rowdies-light text-4xl !p-4 flex text-center justify-center items-center">
        <i className="fa-solid fa-list-check !mr-2 !mt-1"></i> | My Works
      </div>
      <div className="row2 items-center justify-around grid grid-cols-4 gap-2">
        <div className="card !w-full !h-[20rem]  bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="!rounded-t-lg"
            src="/src/assets/projects/project1.png"
            alt="product image"
          />

          <div className="flex items-center justify-center !mt-[4rem]">
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg !text-sm !px-5 !py-2.5 !m-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Explore Now
            </a>
          </div>
        </div>

        <div className="card !w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="!p-8 !rounded-t-lg"
            src="/src/assets/skill-img/skill1.png"
            alt="product image"
          />
          <div className="!px-5 !pb-5">
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg !text-sm !px-5 !py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>

        <div className="card !w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="!p-8 !rounded-t-lg"
            src="/src/assets/skill-img/skill1.png"
            alt="product image"
          />
          <div className="!px-5 !pb-5">
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg !text-sm !px-5 !py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>

        <div className="card !w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <img
            className="!p-8 !rounded-t-lg"
            src="/src/assets/skill-img/skill1.png"
            alt="product image"
          />
          <div className="!px-5 !pb-5">
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg !text-sm !px-5 !py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
