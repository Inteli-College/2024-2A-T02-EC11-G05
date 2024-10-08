import React from 'react';
import { Box, Typography } from '@mui/material';
import carbono from '../text_graph/CO2_icon.png';
import treeIcon from '../text_graph/tree_icon.png'; 


interface TreeNumberProps {
  value: number | string;
  label: string;
  imageSrc?: string;
}



const TreeNumber: React.FC<TreeNumberProps> = ({ value, label, imageSrc }) => {
  const imageSource = imageSrc === 'tree' ? treeIcon : carbono;

  return (
    <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4, mb: 3 }}>
      <Box
        sx={{
          width: 130,
          height: 130,
          borderRadius: '50%',
          border: '3px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 1.5,
        }}
      >
        <Typography variant="h6" align="center">
          {value}
        </Typography>
      </Box>

      <Typography variant="body2" align="center">{label}</Typography>

      {imageSrc && (
        <Box mt={3}>
          <img src={imageSource} alt={label} width={40} height={40} style={{ marginTop: '10px' }} />
        </Box>
      )}
    </Box>
  );
};

const TextGraph: React.FC = () => {
  return (
    <Box className="bg-white p-6 rounded-lg shadow-lg w-1/2">
      <div className="flex justify-center space-x-6">
        <TreeNumber value={198} label="TOTAL DE ÁRVORES" imageSrc="tree" />
        <TreeNumber value="3366 KG" label="CARBONO RECICLADO" imageSrc="carbono" />
      </div>
    </Box>
  );
};


export default TextGraph;
