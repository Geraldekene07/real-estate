// import React from "react";
// import backgroundimg from "../assets/House-for-sale-in-Lekki2.jpeg";

// const Main = () => {
//   const backgroundstyle = {
//     backgroundImage: `url(${backgroundimg})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center center",
//     minHeight: "100vh",
//   };
//   return (
//     <div className="relative bg-opacity-50 bg-gray-900" style={backgroundstyle}>
//       <div className="absolute inset-0 text-center p-20">
//         <h1 className="find">Find The Perfect Property Here</h1>
//         <h4 className="font-Nunito text-white">Browse our extensive selection of properties to find your dream home</h4>

//       </div>
//     </div>
//   );
// };

// export default Main;

// import React from "react";
// import backgroundimg from "../assets/House-for-sale-in-Lekki2.jpeg";

// const Main = () => {
//   const backgroundstyle = {
//     backgroundImage: `url(${backgroundimg})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center center",
//     minHeight: "100vh",
//   };
//   return (
//     <div className="relative" style={backgroundstyle}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
//         <h1 className="find text-4xl font-bold">Find The Perfect Property Here</h1>
//         <h4 className="text-lg font-Nunito">
//           Browse our extensive selection of properties to find your dream home
//         </h4>
//       </div>
//       <div>

//       </div>

//     </div>
//   );
// };

// export default Main;

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
    <div className="relative" style={backgroundstyle}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="find text-4xl font-bold">
          Find The Perfect Property Here
        </h1>
        <h4 className="text-lg font-Nunito">
          Browse our extensive selection of properties to find your dream home
        </h4>
      </div>
    </div>
  );
};

export default Main;
