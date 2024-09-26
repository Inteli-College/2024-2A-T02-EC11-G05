import React, { useState } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CompareIcon from '@mui/icons-material/Compare';
import CompareImgComponent from '../components/CompareImgComponent';
import TreeNumber from '../components/TreeNumber';
import TrustComponent from '../components/TrustComponent';
import Navbar from '../components/Navbar';




const DashboardPage: React.FC = () => {
  // Abrindo e fechando o modal
  const [open, setOpen] = useState(false);

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
      
      <Navbar />

      {/* Adicionando o gradiente ao fundo */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #ffffff, #e6f7e9)',
          display: 'flex',
          alignItems: 'flex-start', 
          paddingTop: { xs: '2%', md: '3%' }, 
          paddingBottom: '2%',
        }}
      >
        {/* Grid principal */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ padding: 10 }}
        >



          {/* Quadro 1: Intervalo de Árvores */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: '16px' }}>
             

              {/* Usando o TrustComponent para o gráfico deve ser integrado */}
              <TrustComponent percentage={85} minValue={0} maxValue={100} />

              <Typography variant="h6" align="center" gutterBottom>
                Intervalo de Árvores
              </Typography>

            </Paper>
          </Grid>



          {/* Quadro 2: Total de Árvores e Carbono Reciclado */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: '16px' }}>
              
              <Grid container spacing={2} justifyContent="center">
                
                <Grid item>
                  <TreeNumber value={198} label="TOTAL DE ÁRVORES" imageSrc="/tree_icon.png" />
                </Grid>
               
                <Grid item sx={{ ml: 4 }}>
                  <TreeNumber value="3366 KG" label="carbono reciclado" imageSrc="/CO2_icon.png" />
                </Grid>
                
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default DashboardPage;
