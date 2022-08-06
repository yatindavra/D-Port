import React from "react";
import newsapp from "../assets/portfolio/news.avif";
import cloudnote from "../assets/portfolio/cloudnotes.png";
import Weather from "../assets/portfolio/weatherapp.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: newsapp,
      href: "https://github.com/yatindavra/NewsNet/tree/15ca33235feb449a527a5a10f09e915d8b3cda55"
    },
    {
      id: 2,
      src: Weather,
      href: "https://github.com/yatindavra/Weather-Project"
    },
    {
      id: 3,
      src: cloudnote,
      href: "https://github.com/yatindavra/CloudNote"
    },
  
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" href={href} target="_blank" rel="noreferrer">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
