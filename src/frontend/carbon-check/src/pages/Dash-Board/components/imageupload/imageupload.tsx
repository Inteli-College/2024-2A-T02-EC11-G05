import React, { ChangeEvent } from "react";

interface UploadImageProps {
  onImageUpload: (image: File) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ onImageUpload }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onImageUpload(e.target.files[0]); // Obtém o primeiro arquivo selecionado
    }
  };

  return (
    <div>
      <label className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center hover:bg-gray-700 transition duration-300 cursor-pointer">
        Inserir Imagem
        <input
          type="file"
          className="hidden"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default UploadImage;
