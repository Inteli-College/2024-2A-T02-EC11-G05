import React from 'react';
import PlanetaImage from './planeta.png'; // Ajuste o caminho se necessário

const Planeta: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-60 p-20">
      <p className="text-xl md:text-3xl mb-8 text-black text-center max-w-md">
      Apenas em um clique é possível fazer o upload de imagens capturadas por satélites. A partir dessas imagens, o sistema automatiza a contagem de árvores, fornecendo dados precisos e rápidos para a gestão ambiental e geração de créditos de carbono. 
      </p>
      
      <div className="flex justify-center items-center h-screen">
        <img src={PlanetaImage} alt="Descrição" className="w-100 h-auto" />
      </div>
      
    </div>
  );
};

export default Planeta;
