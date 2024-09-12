import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import Stack from '@mui/material/Stack';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
}

export default function CustomModal({ open, handleClose }: CustomModalProps) {
  const [latestImageUrl, setLatestImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (open) {
      // Fetch the latest image when the modal opens
      axios.get('http://127.0.0.1:8000/latest-image', { responseType: 'blob' })
        .then((response) => {
          const imageUrl = URL.createObjectURL(response.data);
          setLatestImageUrl(imageUrl); // Set the fetched image URL
        })
        .catch((error) => {
          console.error('Error fetching the latest image:', error);
        });
    } else {
      // Clean up the image URL when the modal is closed
      setLatestImageUrl(null);
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Aqui você compara as imagens 
        </Typography>
        <Stack direction="row" spacing={8}>
          <Stack>
            <h3>Imagem antes</h3>
                 {/* Display the fetched image */}
            {latestImageUrl ? (
              <img src={latestImageUrl} alt="Imagem Antes" style={{ width: '100%', height: 'auto' }} />
            ) : (
              <Typography>Carregando...</Typography>
            )}
          </Stack>
          <Stack>
          <h3>Imagem depois</h3>

          </Stack>
        </Stack>
        <Button onClick={handleClose} variant="contained">
          Fechar</Button>
      </Box>
    </Modal>
  );
}
