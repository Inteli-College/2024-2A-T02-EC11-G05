import React from 'react';
import '@fontsource/bai-jamjuree'; // Importando a fonte
import styled from 'styled-components';

interface TypographyProps {
  children: React.ReactNode;
  color?: string;
}

const TypographyStyled = styled.div<{ color?: string }>`
  font-family: 'Bai Jamjuree', sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: ${({ color }) => color || 'inherit'};
`;

const Typography: React.FC<TypographyProps> = ({ children, color }) => {
  return (
    <TypographyStyled color={color}>
      {children}
    </TypographyStyled>
  );
};

export default Typography;
