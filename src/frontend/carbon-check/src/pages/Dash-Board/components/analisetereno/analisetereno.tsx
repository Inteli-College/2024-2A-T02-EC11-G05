import React, { useState } from 'react';

const AnalyzeTerrain: React.FC<{ selectedImage: string | null }> = ({ selectedImage }) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Imagem processada (simulada)
  const processedImage = '../../assets/processed-image.png'; // Substitua pelo caminho correto da imagem processada

  return (
    <div>
      {/* Botão para abrir os dois popups */}
      <button
        onClick={() => setIsPopupOpen(true)}
        className="bg-black text-white py-2 px-4 rounded-[8%] flex items-center hover:bg-gray-800"
      >
        <img
          src="../../assets/check.png"
          alt="Analyze Icon"
          className="h-6 w-6 mr-2"
        />
        Analisar Terreno
      </button>

      {/* Popups para comparar as imagens */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">Comparação de Imagens</h2>

            <div className="flex justify-around">
              {/* Imagem original (subida pelo usuário) */}
              <div>
                <h3 className="text-md font-semibold">Imagem Original</h3>
                {selectedImage ? (
                  <img
                    src={selectedImage}
                    alt="Original"
                    className="mt-2 h-32 w-32 object-cover"
                  />
                ) : (
                  <p>Nenhuma imagem foi carregada.</p>
                )}
              </div>

              {/* Imagem processada */}
              <div>
                <h3 className="text-md font-semibold">Imagem Processada</h3>
                <img
                  src={processedImage}
                  alt="Processed"
                  className="mt-2 h-32 w-32 object-cover"
                />
              </div>
            </div>

            {/* Botão para fechar os popups */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnalyzeTerrain;
