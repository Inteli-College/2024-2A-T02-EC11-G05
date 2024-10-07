import React, { useState } from 'react';

const MetricsButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
    >
      Ver Métricas
    </button>
  );
};

export default MetricsButton;
