import React, {useState} from 'react';
import {Button, Stack} from '@mui/material';
import localCloud from './cloudIcon.svg'
import Grid from '@mui/material/Grid2';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CompareIcon from '@mui/icons-material/Compare';

import CompareImgComponent from '../components/CompareImgComponent';

import TreeINumber from '../components/TreeINumber';
import TrustComponent from '../components/TrustComponent';




const DashboardPage: React.FC = () => {

  // Abrindo e fechando o modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <h1>Dashboard</h1>
    <Grid container spacing={2}>
    <Grid size={6}>
    <TrustComponent percentage={85} startYear={1903} endYear={2050} />
    </Grid>
    <Grid size={6}>
    <TreeINumber totalTrees={1984} />
    </Grid>
    </Grid>
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
    <span>https://youtu.be/xs6loKKgWCY?t=947</span>

    </div>
    
  );
};

export default DashboardPage;