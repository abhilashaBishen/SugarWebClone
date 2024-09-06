import React, { useState } from 'react';
import './MousseMuseLipCream.css';

import mousseMuseImage from '../Assets/Buy Beauty Products at SUGAR Cosmetics Online Store/img1.jpg'; // Update with actual image path

const MousseMuseLipCream = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/hAZ1JMXiWWA?autoplay=1'; 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="mousse-muse">
      <div className="section-title">
        <span className="line"></span>
        <span className="title">Mousse Muse Lip Cream</span>
        <span className="line"></span>
      </div>
      <div className="image-container" onClick={openModal}>
        <img src={mousseMuseImage} alt="Mousse Muse Lip Cream" className="product-image" />
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MousseMuseLipCream;
