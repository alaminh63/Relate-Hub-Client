import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 20 }}
      style={{
        backgroundImage:
          'url("https://static.vecteezy.com/system/resources/previews/020/804/161/large_2x/concept-with-smartphone-with-modern-creative-telecommunication-and-internet-network-connect-in-smart-city-gps-navigation-map-icon-on-blur-road-background-technology-lifestyle-and-business-travel-photo.jpg")',
      }}
      className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
    >
      <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950">
        <div className="text-white md:mt-0 mt-20 w-full md:w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center px-6">
          <div className="bg-gradient-to-l from-transparent to-sky-600 lg:text-2xl sm:text-xl lg:w-1/2 w-1/2 md:w-1/2 font-bold px-6 rounded-lg text-white py-4">
            Dream Gaming Website
          </div>
          <div
            div
            className="lg:text-7xl sm:text-3xl md:text-4xl text-3xl text-shadow font-bold "
          >
           Connect With 
          </div>

          <div className="lg:text-xl text-xl text-white-500 my-3">
            Conquer the TitanArena: Gaming Glory Awaits!
          </div>
          <Link to="/addContact">
            <div
              className="border-2 md:text-[13px] w-1/2 sm:w-1/3 p-3 rounded font-bold py-5 !text-lg  text-center my-6 hover:bg-sky-600 border-sky-500 transition duration-500 ease-in-out"
             
            >
             Add Contact
            </div>
          </Link>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
