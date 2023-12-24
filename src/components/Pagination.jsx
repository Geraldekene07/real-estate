// import React from "react";
// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// const Pagination = () => {
//   const [active, setActive] = React.useState(1);

//   const getItemProps = (index) => ({
//     variant: active === index ? "filled" : "text",
//     color: "white",
//     onClick: () => setActive(index),
//     className: "rounded-full",
//   });

//   const next = () => {
//     if (active === 4) return;

//     setActive(active + 1);
//   };

//   const prev = () => {
//     if (active === 1) return;

//     setActive(active - 1);
//   };
//   return (
//     <div className="flex justify-center items-center mt-3 gap-4">
//       <div className="flex items-center gap-2">
//         <IconButton {...getItemProps(1)}>1</IconButton>
//         <IconButton {...getItemProps(2)}>2</IconButton>
//         <IconButton {...getItemProps(3)}>3</IconButton>
//         <IconButton {...getItemProps(4)}>4</IconButton>
//       </div>
//     </div>
//   );
// };

// export default Pagination;
