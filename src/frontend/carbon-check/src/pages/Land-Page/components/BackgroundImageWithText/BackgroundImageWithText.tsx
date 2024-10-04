import React from 'react';

interface BackgroundImageWithTextProps {
  title: string;
  text: string;
  buttonText: string;
  onButtonClick: () => void;
}

const BackgroundImageWithText: React.FC<BackgroundImageWithTextProps> = ({ title, text, buttonText, onButtonClick }) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./../backgound.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-3xl mb-8"> 
          {text}
        </p>
        <button
          className="bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default BackgroundImageWithText;


