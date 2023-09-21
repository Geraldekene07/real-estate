import React, { useState } from "react";
import backgroundimg from "../assets/House-for-sale-in-Lekki2.jpeg";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const backgroundstyle = {
    backgroundImage: `url(${backgroundimg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh",
  };

  return (
    <div className="relative min-h-0" style={backgroundstyle}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
      <h1 className="find text-5xl mt--5  md:text-6xl text-center md:text-left">
        Find The Perfect Property Here
        </h1>
        <h4 className="text-lg font-Nunito mx-1 mt-4 text-center">
          Browse our extensive selection of properties to find your dream home
        </h4>
        <div className="flex w-72 md:w-auto justify-around mt-20">
  <div className="overflow-x-auto max-w-screen-md">
    <ul className="flex space-x-10 font-Nunito">
      <li className="flex-shrink-0">
        <button className="bg-white text-black p-1 w-20 rounded-2xl hover:bg-blue-800">
          Rent
        </button>
      </li>
      <li className="flex-shrink-0">
        <button className="bg-white text-black p-1 w-20 rounded-2xl hover:bg-blue-800">
          Sale
        </button>
      </li>
      <li className="flex-shrink-0">
        <button className="bg-white text-black p-1 w-40 rounded-2xl hover:bg-blue-800">
          New Developments
        </button>
      </li>
      <li className="flex-shrink-0">
        <button className="bg-white text-black p-1 w-20 rounded-2xl hover:bg-blue-800">
          Land
        </button>
      </li>
      <li className="flex-shrink-0">
        <button className="bg-white text-black p-1 w-40 rounded-2xl hover:bg-blue-800">
          For Commercial
        </button>
      </li>
    </ul>
  </div>
</div>

      </div>
    </div>
  );
};

export default Main;
