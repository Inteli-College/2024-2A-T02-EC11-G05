import React from 'react';
import { Box, Typography } from '@mui/material';
import styled from "styled-components";



interface TreeNumberProps {
  value: number | string;
  label: string;
  imageSrc?: string;
}


const TreeNumber: React.FC<TreeNumberProps> = ({ value, label, imageSrc }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Círculo com o número */}
      <Box
        sx={{
          width: 130,
          height: 130,
          borderRadius: '50%',
          border: '3px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 1.5, // Pequeno espaço entre o círculo e a legenda
        }}
      >
        <Typography variant="h6" align="center">
          {value}
        </Typography>
        </Box>
      {/* Legenda */}
      <Typography variant="body2">{label}</Typography>
      
      {imageSrc && (
        <Box mt={1}>
          <img src={imageSrc} alt={label} width={40} height={40} /> 
        </Box>
      )}

    </Box>
  );
};

export default TreeNumber;
