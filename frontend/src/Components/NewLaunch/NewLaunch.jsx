
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img15 from '../Assets/Buy Beauty Products at SUGAR Cosmetics Online Store/img15.jpg'
import './NewLaunch.css'
const NewLaunch = () => {
    const navigate = useNavigate();
    const handleImageClick =() =>{
        navigate('/newlaunch');
    };
  return (
    <div className='launch'>
        <div className='text'>NEW LAUNCH</div>
      <img src={img15} onClick={handleImageClick} alt="" className='launchImage' />
    </div>
  )
}

export default NewLaunch

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import img15 from '../Assets/Buy Beauty Products at SUGAR Cosmetics Online Store/img15.jpg'; 
// import './NewLaunch.css'; 

// const NewLaunch = () => {
//   const navigate = useNavigate();

//   const handleImageClick = () => {
//     navigate('/newlaunch'); 
    
//   };

//   return (
//     <div className='launch'>
//       <div className='text'>
//         <span className='line'></span>
//         <span className='launch-title'>NEW LAUNCH</span>
//         <span className='line'></span>
//       </div>
//       <img
//         src={img15}
//         alt="New Launch"
//         className='launch-image'
//         onClick={handleImageClick}
//       />
//     </div>
//   );
// };

// export default NewLaunch;

