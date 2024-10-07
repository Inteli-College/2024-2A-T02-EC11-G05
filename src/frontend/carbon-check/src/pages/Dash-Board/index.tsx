import React, { useState, useEffect } from 'react';
import Heather from '../components/heather/heather';
import VelocimeterGraph from './components/speed_graph/speed_graph'; // Agora importa corretamente
import TreeNumber from './components/text_graph/text_graph';



const DashboardPage: React.FC = () => {
  const [numTrees, setNumTrees] = useState<number>(100);
  const [metrics, setMetrics] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);



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

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      <Heather />
 
      <div className="flex flex-col items-center justify-start py-8 px-10 min-h-full mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          
          <VelocimeterGraph />

          <TreeNumber />
        </div>
      </div>
    </div>
  );
};


export default DashboardPage;
