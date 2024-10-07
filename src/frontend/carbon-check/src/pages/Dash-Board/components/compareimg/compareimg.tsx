import React, { useState } from "react";

interface CompareImagesButtonProps {
  image1: string;
  image2: string;
}

const CompareImagesButton: React.FC<CompareImagesButtonProps> = ({ image1, image2 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCompareClick = () => {
    if (image1 && image2) {
      setIsModalOpen(true); // Abre o modal com as imagens
    } else {
      alert("Por favor, insira as imagens para comparar.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div>
      <button
        onClick={handleCompareClick}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
      >
        Comparar Imagens
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-6xl w-full relative">
            <h2 className="text-lg font-bold mb-4">Imagens Comparadas</h2>
            <div className="flex space-x-4">
              <img src={image1} alt="Imagem 1" className="w-full h-auto object-contain max-h-144" />
              <img src={image2} alt="Imagem 2" className="w-full h-auto object-contain max-h-144" />
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white py-1 px-2 rounded"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareImagesButton;
