import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const FlexLayout: React.FC = () => {
  return (
    <FlexContainer>
      <ImageWrapper>
        <Image src="/path-to-your-image.jpg" alt="Nature" />
      </ImageWrapper>
      <TextWrapper>
        <p>
          Este é um exemplo de texto ao lado de uma imagem, com ambos ocupando
          50% do espaço disponível. O conteúdo pode ser ajustado conforme
          necessário.
        </p>
      </TextWrapper>
    </FlexContainer>
  );
};

export default FlexLayout;
