import React, { useState } from "react";
import UploadImage from "./components/imageupload/imageupload";
import CompareImagesButton from "./components/compareimg/compareimg";
import AnalizeImage from "./components/analizeimage/analiseimage";
import Heather from "../components/heather/heather";
import MetricsButton from "./components/MetricsButton/MetricsButton";

const DashBoard: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageUpload = (image: File) => {
    setSelectedImage(image);
  };

  const handleAnalyzeImage = () => {
    if (selectedImage) {
      setIsModalOpen(true);
    } else {
      alert("Por favor, insira uma imagem antes de analisar.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Heather />

      <div className="flex-1 flex flex-col items-center justify-center pt-16">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="flex space-x-4 items-center justify-center">
          <UploadImage onImageUpload={handleImageUpload} />

          <button
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-700 transition duration-300"
            onClick={handleAnalyzeImage}
          >
            Ampliar Imagem
          </button>

          <CompareImagesButton
            image1={selectedImage ? URL.createObjectURL(selectedImage) : ""}
            image2={selectedImage ? URL.createObjectURL(selectedImage) : ""}
          />

          <MetricsButton />
        </div>

        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-lg w-full">
              <h2 className="text-lg font-bold mb-4">Análise de Imagem</h2>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Imagem para análise"
                className="w-full h-auto object-contain"
              />
              <button
                className="bg-red-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => setIsModalOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
