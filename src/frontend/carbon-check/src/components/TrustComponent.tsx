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
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 53, 91],
        },
      },
      labels: ['Intervalo de Árvores'],
    },
  };

  return (

    
    <Box sx={{ textAlign: 'center' }}>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="radialBar"
        height={350}
      />


      {/* Legendas do intervalo */}
      <Box display="flex" justifyContent="space-between" mt={-2}>
        <Typography variant="body2" sx={{ ml: 11 }}>{minValue}</Typography> 
        <Typography variant="body2" sx={{ mr: 10 }}>{maxValue}</Typography> 
      </Box>


    </Box>
  );
};

export default TrustComponent;
