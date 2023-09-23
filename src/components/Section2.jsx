import React from "react";
import bg2 from "../assets/bg2.jpg";

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
        </div>
      </div>
    </div>
  );
};

export default Section2;
