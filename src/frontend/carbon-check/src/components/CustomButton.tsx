import React from 'react';
import { Button, Box } from '@mui/material';



interface CustomButtonProps {
  label: string;
  iconSrc: string;
  onClick: () => void;
}



const CustomButton: React.FC<CustomButtonProps> = ({ label, iconSrc, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        '&:hover': {
          backgroundColor: '#555',
        },
      }}
      startIcon={<img src={iconSrc} alt={label} width={10} height={10} />} 
    >
      {label}
    </Button>
  );
};

export default CustomButton;
