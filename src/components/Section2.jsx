import React from "react";
import bg2 from "../assets/bg2.jpg";
import { MdApartment } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { FaHotel } from "react-icons/fa";
import { RiHotelLine } from "react-icons/ri";

const Section2 = () => {
  const back3 = {
    backgroundImage: `url(${bg2})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "80vh",
  };

  return (
    <div className="relative" style={back3}>
      <div className="absolute inset-0 bg-blue-950 opacity-50"></div>
      <div>
        <div className="absolute inset-0">
          <h3 className=" font-Aclonica mt-16 text-xl text-white  md:text-4xl font-700 text-center">
            What are you looking for?
          </h3>
          <h4 className="text-center text-white  mt-2 font-Nunito text-lg">
            We provide full service at every step
          </h4>
          <div className="flex justify-around mt-5   ">
            <div className="card p-20">
              <div className="bg-new-blue h-20 w-20 rounded-full hover:bg-orange-600">
                <a className="text-white flex justify-center" href="">
                  <MdApartment className="text-6xl mt-2" />
                </a>
              </div>
              <h3 className="text-new-blue mt-2">Apartment</h3>
            </div>
            <div className="card p-20">
              <div className="bg-new-blue h-20 w-20 rounded-full hover:bg-orange-600">
                <a className="text-white flex justify-center" href="">
                  <FcHome className="text-6xl mt-1" />
                </a>
              </div>
              <h3 className="text-new-blue mt-2">Terrace</h3>
            </div>
            <div className="card p-20">
              <div className="bg-new-blue h-20 w-20  rounded-full hover:bg-orange-600">
                <a className="text-white flex justify-center" href="">
                  <FaHotel className="text-5xl mt-3" />
                </a>
              </div>
              <h3 className="text-new-blue mt-2">Duplex</h3>
            </div>
            <div className="card p-20">
              <div className="bg-new-blue h-20 w-20 rounded-full hover:bg-orange-600">
                <a className="text-white flex justify-center" href="">
                  <RiHotelLine className="text-6xl mt-2 " />
                </a>
              </div>
              <h3 className="text-new-blue mt-2">Land</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
