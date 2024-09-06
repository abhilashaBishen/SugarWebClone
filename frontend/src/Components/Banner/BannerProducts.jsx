import React from "react";
import { useState,useEffect } from "react";
import img1 from "../Assets/Banner/img1.gif";
import img2 from "../Assets/Banner/img2.jpg";
import img3 from "../Assets/Banner/img3.jfif";
import img4 from "../Assets/Banner/img4.jfif";
import img5 from "../Assets/Banner/img5.jpg";
import img6 from "../Assets/Banner/img6.jpg";
import img7 from "../Assets/Banner/img7.jpg";
import img8 from "../Assets/Banner/img8.jpg";
import img9 from "../Assets/Banner/img9.jpg";
import "./Banner.css";
// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";
// // import {FaAngleRight} from "react-icons/fa6";

// const BannerProducts = () => {
//   const desktopImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

//   const [currentImage, setCurrentImage] = useState(0);
//   //style={{ transform: `translateX(-${currentImage * 100}%)` }}

//   const nextImage =()=>{
//     if(desktopImages.length-1>currentImage){
//       setCurrentImage(preve => preve+1)
//     }

//   }
//   const previousImage = () =>{
//     if(currentImage!=0){
//       setCurrentImage(preve =>preve-1)
//     }
//   }
//   return (
//     <div className="container">

//       <div className="full-height">
//         <div>
//           <button onClick={previousImage}><FaAngleRight /></button>
//           <button onClick={nextImage}><FaAngleLeft/></button>
//         </div>
//         <div
//           className="flex-container"
//           style={{ transform: `translateX(-${currentImage * 100}%)` }}
//         >
//           {desktopImages.map((imgURL, index) => (
//             <div className="flex-item" key={index}>
//               <img src={imgURL} alt={`Image ${index}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerProducts;

// import React, { useState } from 'react';
// import './Banner.css'; // Import the CSS file
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
// const desktopImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9]
const BannerProducts = () => {
  const desktopImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevious = () => {
    setCurrentImage((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : desktopImages.length - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prevIndex) =>
      prevIndex < desktopImages.length - 1 ? prevIndex + 1 : 0
    );
  };


    // Automatically slide to the next image after a specific time interval
    useEffect(() => {
      const interval = setInterval(handleNext, 3000); // Slide every 3 seconds
  
      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentImage]);

  return (
    <div className="container">
      <div className="slider-container">
        <div
          className="flex-slider"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {desktopImages.map((imgURL, index) => (
            <div className="slider-item" key={index}>
              <img src={imgURL} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
        <button className="nav-button prev-button" onClick={handlePrevious}>
          <FaChevronLeft />
        </button>
        <button className="nav-button next-button" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BannerProducts;
