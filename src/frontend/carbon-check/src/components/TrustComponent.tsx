import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Typography } from '@mui/material';
import { ApexOptions } from 'apexcharts';  // Importando a tipagem correta para as opções do ApexCharts

const TrustComponent: React.FC<{ percentage: number, minValue: number, maxValue: number }> = ({ percentage, minValue, maxValue }) => {

  const chartData: { options: ApexOptions, series: number[] } = {
    series: [percentage], 
    options: {
      chart: {
        type: 'radialBar',
        offsetY: -20,
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#e6f7e9',
            strokeWidth: '97%',
            margin: 5, // margin em pixels
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              color: '#e6f7e9',
              opacity: 1,
              blur: 2,
            },
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
              offsetY: -10,
              fontSize: '20px',
              formatter: (val: number) => `${val}%`, // Mostrar como porcentagem
            },
          },
        },
      },
      grid: {
        padding: {
          top: -10,
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.4,
          gradientToColors: ['#077336'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100], 
          colorStops: [
            {
              offset: 0,
              color: '#F28705', 
              opacity: 1,
            },
            {
              offset: 100,
              color: '#077336', 
              opacity: 1,
            },
          ],
        },
      },
      labels: ['Intervalo de Árvores'],
    },
  };

  const gradientTextStyle = {
    background: 'linear-gradient(90deg, #077336, #F28705)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '22px',
    fontWeight: 'bold',
    marginTop: '-34px',
  };



  return (
    
    <Box sx={{ textAlign: 'center' }}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={350}
      />


      {/* Exibindo o número percentual com gradiente */}
      <Typography sx={gradientTextStyle}>{percentage}%</Typography>


      {/* Legendas do intervalo */}
      <Box display="flex" justifyContent="space-between" mt={-2}>
        <Typography variant="body2" sx={{ ml: 10.5 }}>{minValue}</Typography> 
        <Typography variant="body2" sx={{ mr: 9.5 }}>{maxValue}</Typography> 
      </Box>

      
    </Box>
  );;
};

export default TrustComponent;
