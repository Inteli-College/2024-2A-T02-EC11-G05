import React from 'react';
import styled from 'styled-components';

// Container flexível que segura a imagem e o texto
const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
`;

// Estiliza o wrapper da imagem
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

// Estiliza o wrapper do texto
const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
`;

// Estilo da imagem para garantir que fique dentro do espaço
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

// Título e parágrafo do texto
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const ImageTextComponent: React.FC = () => {
  return (
    <FlexContainer>
      {/* Lado esquerdo com a imagem */}
      <ImageWrapper>
        <Image 
          src="/broto_2.png" 
          alt="Broto de árvore" 
        />
      </ImageWrapper>

      {/* Lado direito com o texto */}
      <TextWrapper>
        <Heading>Sistema de Contagem de Árvores</Heading>
        <Paragraph>
          Oferecemos um sistema que automatiza a contagem de árvores utilizando
          tecnologias avançadas de inteligência artificial e visão computacional.
        </Paragraph>
        <Paragraph>
          Apenas em um clique é possível fazer o upload de imagens capturadas por satélites. A partir dessas imagens, o sistema automatiza a contagem de árvores, fornecendo dados precisos e rápidos para a gestão ambiental e geração de créditos de carbono.
        </Paragraph>
        {/* Adicionando a nova imagem do planeta */}
        <ImageWrapper>
          <Image 
            src="/planeta-terra 2.png" 
            alt="Planeta Terra" 
          />
        </ImageWrapper>
      </TextWrapper>
    </FlexContainer>
  );
};

export default ImageTextComponent;
