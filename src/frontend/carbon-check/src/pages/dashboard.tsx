import React, {useState} from 'react';
import {Grid, Button, Stack} from '@mui/material';
import localCloud from './cloudIcon.svg'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CompareIcon from '@mui/icons-material/Compare';

import CompareImgComponent from '../components/CompareImgComponent';




const DashboardPage: React.FC = () => {

  // Abrindo e fechando o modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <h1>Dashboard</h1>
    <Grid container spacing={2}>
    <Grid item xs={6}>
      <p>Intervalo de confiabilidade</p>
    </Grid>
    <Grid item xs={6}>
      <p>Número total de árvores</p>
    </Grid>
    </Grid>
    <span>https://youtu.be/xs6loKKgWCY?t=947</span>
    <Stack direction="row" spacing={8}>
      <Button variant="outlined" color="success" startIcon={<CloudUploadIcon/>}>
        Inserir imagem
      </Button>
      <Button variant="outlined" startIcon={<AnalyticsIcon />}>
        Analisar terreno
      </Button>
      <Button onClick={handleOpen} variant="outlined" startIcon={<CompareIcon/>} >
        Comparar imagens
        
      </Button>
      <CompareImgComponent open={open} handleClose={handleClose} />

    </Stack>
    </div>
    
  );
};

export default DashboardPage;