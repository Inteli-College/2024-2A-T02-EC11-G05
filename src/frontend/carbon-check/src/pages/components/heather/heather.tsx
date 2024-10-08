import React from 'react';
import abundanceImg from '../../../assets/abundance_img.png';



const Heather: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-white flex justify-between items-center p-7 shadow-md z-50">
      <div className="flex items-center">
        <img src={abundanceImg} alt="Abundance Logo" className="w-36 h-auto ml-8" />
      </div>
    </nav>
  );
};

export default Heather;
