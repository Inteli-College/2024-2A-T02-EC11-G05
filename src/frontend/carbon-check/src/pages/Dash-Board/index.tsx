import React, { useState } from "react";
import UploadImage from './components/imageupload/imageupload';
import CompareImagesButton from './components/compareimg/compareimg';
import AnalizeImage from './components/analizeimage/analiseimage';

import Heather from '../components/heather/heather';
import MetricsButton from "./components/MetricsButton/MetricsButton";

const DashBoard: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMetrics, setShowMetrics] = useState(false);

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

  const handleMetricsClick = () => {
    setShowMetrics(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Heather />

      <div className="flex-1 flex flex-col items-center justify-center pt-16">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <div className="flex space-x-4 items-center justify-center">
          {/* Upload Image */}
          <UploadImage onImageUpload={handleImageUpload} />

          {/* Ampliar Imagem */}
          <button
            className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-700 transition duration-300"
            onClick={handleAnalyzeImage}
          >
            Ampliar Imagem
          </button>

          {/* Comparar Imagens */}
          <CompareImagesButton
            image1={selectedImage ? URL.createObjectURL(selectedImage) : ''}
            image2={selectedImage ? URL.createObjectURL(selectedImage) : ''}
          />

          {/* Ver Métricas */}
          <MetricsButton
            onClick={handleMetricsClick}
          />
        </div>

        {/* Modal de Ampliar Imagem */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg max-w-lg w-full">
              <h2 className="text-lg font-bold mb-4">Análise de Imagem</h2>
              <img src={URL.createObjectURL(selectedImage)} alt="Imagem para análise" className="w-full h-auto object-contain" />
              <button
                className="bg-red-500 text-white py-2 px-4 rounded mt-4"
                onClick={() => setIsModalOpen(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* Exibição das Métricas */}
        {showMetrics && (
          <div className="mt-4">
            <h3 className="font-bold text-lg">Métricas Ambientais:</h3>
            <ul className="list-disc ml-5">
              <li>CO2 Sequestrado: 48 kg de CO2 por ano por árvore.</li>
              <li>Oxigênio Produzido: 117 kg de oxigênio por ano por árvore.</li>
              <li>Água Retida: 378 litros de água por dia por árvore.</li>
              <li>Solo Preservado: 200 kg de solo por ano por árvore.</li>
              <li>Biodiversidade Suportada: Até 10 espécies diferentes por árvore.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoard;
