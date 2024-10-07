import React, { useState } from 'react';

const MetricsButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMetricsClick = () => {
    setIsModalOpen(true); // Abre o modal com as métricas
  };

  const closeModal = () => {
    setIsModalOpen(false); // Fecha o modal
  };

  return (
    <div>
      <button
        onClick={handleMetricsClick}
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-green-400 transition duration-300"
      >
        Ver Métricas
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <h2 className="text-lg font-bold mb-4">Métricas Ambientais</h2>
            <ul className="list-disc ml-5">
              <li>CO2 Sequestrado: 48 kg de CO2 por ano por árvore.</li>
              <li>Oxigênio Produzido: 117 kg de oxigênio por ano por árvore.</li>
              <li>Água Retida: 378 litros de água por dia por árvore.</li>
              <li>Solo Preservado: 200 kg de solo por ano por árvore.</li>
              <li>Biodiversidade Suportada: Até 10 espécies diferentes por árvore.</li>
            </ul>
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

export default MetricsButton;
