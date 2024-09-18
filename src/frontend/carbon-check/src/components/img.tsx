import React, { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);

      // Criando um URL de visualização da imagem selecionada
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
      />
      
      {preview && (
        <div>
          <h3>Imagem Selecionada:</h3>
          <img 
            src={preview} 
            alt="Preview" 
            style={{ width: '300px', height: 'auto' }} 
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
