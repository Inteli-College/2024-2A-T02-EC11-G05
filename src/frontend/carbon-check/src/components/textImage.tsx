import React from 'react';
import styled from 'styled-components';





// Container flexível que segura a imagem e o texto, É global, se colocar um background aqui ele tira o gradiente 
const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100vh;
`;


// Estiliza o wrapper da imagem da mão com o broto
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
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
        <Paragraph>
          Oferecemos um sistema que automatiza a <br /> 
          contagem de árvores utilizando tecnologias <br />
          avançadas de inteligência artificial e visão <br />
          computacional.
        </Paragraph>

         
      </ImageWrapper>





      {/* Lado direito com o texto */}
      <TextWrapper>
        
        

       
        
        {/* Adicionando a nova imagem do planeta */}
        <ImageWrapper>
          <Image 
            src="/planeta-terra.png" 
            alt="Planeta Terra" 
          />
          <Paragraph>
          Apenas em um clique é possível fazer o <br /> 
          upload de imagens capturadas por satélites.<br />
          A partir dessas imagens, o sistema <br />
          automatiza a contagem de árvores, <br />
          fornecendo dados precisos e rápidos para a <br /> 
          gestão ambiental e geração de créditos de carbono.
        </Paragraph>
        </ImageWrapper>


      
      </TextWrapper>
    </FlexContainer>
  );
};

export default ImageTextComponent;
