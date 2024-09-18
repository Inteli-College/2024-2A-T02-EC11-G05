import React, {useState} from 'react';
import {Button, Stack, Box} from '@mui/material';
import localCloud from './cloudIcon.svg'
import Grid from '@mui/material/Grid2';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CompareIcon from '@mui/icons-material/Compare';

import CompareImgComponent from '../components/CompareImgComponent';

import TreeNumber from '../components/TreeNumber';
import TrustComponent from '../components/TrustComponent';




const DashboardPage: React.FC = () => {

  // Abrindo e fechando o modal
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Rota para enviar a imagem pro backend
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://127.0.0.1:8000/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully');
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };



  return (
    <div>
      <h1>Dashboard</h1>
    <Grid container spacing={1}>
    <Grid size={5} offset={{ md: 2 }}>
    <TrustComponent percentage={85} startYear={1903} endYear={2050} />
    </Grid>
    <Grid size={5}>
    <TreeNumber totalTrees={1984} />
    </Grid>
    </Grid>
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="20vh" 
      >
        <Stack direction="row" spacing={8}>
          <Button  variant="outlined" color="success" startIcon={<CloudUploadIcon />}>
          <label htmlFor="upload-input" style={{ cursor: 'pointer' }}>
              Inserir imagem
            </label>
          </Button>
          <input id="upload-input" type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
          <Button variant="outlined" startIcon={<AnalyticsIcon />}>
            Analisar terreno
          </Button>
          <Button onClick={handleOpen} variant="outlined" startIcon={<CompareIcon />}>
            Comparar imagens
          </Button>
          <CompareImgComponent open={open} handleClose={handleClose} />
        </Stack>
      </Box>
    <span>https://youtu.be/xs6loKKgWCY?t=947</span>

    </div>
    
  );
};

export default DashboardPage;