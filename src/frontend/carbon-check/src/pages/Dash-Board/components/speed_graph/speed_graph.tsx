import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';
import { Box, Typography } from '@mui/material';



const TrustComponent: React.FC<{ value: number, minValue: number, maxValue: number }> = ({ value, minValue, maxValue }) => {
  const normalizedValue = ((value - minValue) / (maxValue - minValue)) * 100;

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Stack direction="column" spacing={-2} alignItems="center" justifyContent="center">
        <Gauge
          value={normalizedValue}
          width={300}
          height={200}
          startAngle={-90}
          endAngle={90}
          sx={{
            '& .MuiGauge-fill': {
              stroke: 'url(#gradient)',
            },
            '& .MuiGauge-track': {
              stroke: '#e6f7e9',
            },
            '& text': { 
              display: 'none',
            },
          }}
        />

        <svg width="0" height="0">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#077336', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8bc34a', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>


        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #077336, #8bc34a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          
        >
          {value}%
        </Typography>

        <Box display="flex" justifyContent="space-between" width="100%" maxWidth="300px">
          <Typography variant="body2" sx={{ ml: 2.5 }}>
            {minValue}
          </Typography>
          <Typography variant="body2" sx={{ mr: 1.5 }}>
            {maxValue}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};


const VelocimeterGraph: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full">
      <TrustComponent value={56} minValue={0} maxValue={100}  />
      <h2 className="text-center text-xl font-bold mt-5 mb-10">Intervalo de Árvores</h2>
    </div>
  );


};

export default VelocimeterGraph;
