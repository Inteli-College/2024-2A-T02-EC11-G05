import React, {useState, useEffect} from 'react';
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
  const [numTrees, setNumTrees] = useState<number>(100);
  const [metrics, setMetrics] = useState<any>(null);

  // Fetch metrics from the backend
  const fetchMetrics = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/calculate-metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num_trees: numTrees }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setMetrics(data);  // Set the fetched metrics in the state
      } else {
        console.error('Failed to fetch metrics');
      }
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };
 // Fetch metrics whenever the numTrees value changes
 useEffect(() => {
  fetchMetrics();
}, [numTrees]);

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
      {metrics && (
        <div>
          <h2>Métricas Calculadas</h2>

          <p>Além dos créditos de carbono as árvores também são responsáveis por um grande impacto no meio ambiente.</p>
          <p>Os números abaixo indicam o impacto total das árvores em um período de 40 anos.</p>


          <p>CO2 Sequestrado: {metrics.total_co2} kg</p>
          <p>Oxigênio Produzido: {metrics.total_oxygen} kg</p>
          <p>Água Retida: {metrics.total_water} litros</p>
          <p>Solo Preservado: {metrics.total_soil} kg</p>
        </div>
      )}

    </div>
    
  );
};

export default DashboardPage;