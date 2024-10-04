import React from 'react';
import PlanetaImage from './planeta.png'; // Ajuste o caminho se necessário

const Planeta: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-60 p-20">
      <div className="flex justify-center items-center h-screen">
        <img src={PlanetaImage} alt="Descrição" className="w-100 h-auto" />
      </div>
      <p className="text-xl md:text-3xl mb-8 text-black text-center max-w-md">
        Oferecemos um sistema que automatiza a contagem de árvores utilizando tecnologias
        avançadas de inteligência artificial e visão computacional
      </p>
    </div>
  );
};

export default Planeta;
