import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Grid, Stack, Modal } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CompareIcon from '@mui/icons-material/Compare';
import CompareImgComponent from '../components/CompareImgComponent';
import TreeNumber from '../components/TreeNumber';
import TrustComponent from '../components/TrustComponent';
import Navbar from '../components/Navbar';
import CustomButton from '../components/CustomButton';




const DashboardPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [numTrees, setNumTrees] = useState<number>(100);
  const [metrics, setMetrics] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); // Definindo uploadedImage

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



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
        setMetrics(data);
      } else {
        console.error('Failed to fetch metrics');
      }
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [numTrees]);



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
          setUploadedImage(URL.createObjectURL(file)); // Atualizando uploadedImage
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
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ padding: 10 }}>
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ padding: 3, borderRadius: '16px' }}>
              <TrustComponent percentage={85} minValue={0} maxValue={100} />
              <Typography variant="h6" align="center" gutterBottom>
                Intervalo de Árvores
              </Typography>
            </Paper>
          </Grid>

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

          <Grid item xs={15}>
            <Stack direction="row" spacing={4} justifyContent="center">
              <CustomButton
                label="Inserir imagem"
                iconSrc="/inserir_img.png"
                onClick={() => {
                  document.getElementById('upload-input')?.click();
                }}
              />

              <input
                type="file"
                id="upload-input"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileUpload}
              />

              <CustomButton
                label="Analisar terreno"
                iconSrc="/analisa_img.png"
                onClick={handleOpen}
              />

              <CustomButton
                label="Comparar imagens"
                iconSrc="/compara_img.png"
                onClick={() => console.log('Comparar imagens clicado')}
              />
            </Stack>
          </Grid>

          <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                textAlign: 'center',
              }}
            >
             
                
              {uploadedImage ? (
                <img src={uploadedImage} alt="Imagem Carregada" style={{ maxWidth: '100%', maxHeight: '300px' }} />
              ) : (
                <Typography variant="body1">Nenhuma imagem carregada.</Typography>
              )}

              <CustomButton label="Fechar" iconSrc="/close_icon.png" onClick={handleClose} />
            </Box>
          </Modal>
        </Grid>
      </Box>
    </div>
  );
};

export default DashboardPage;
