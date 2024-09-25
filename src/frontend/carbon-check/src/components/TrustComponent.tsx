import React from "react";
import styled from "styled-components";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';




import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SemiCircleWrapper = styled.div`
  width: 200px;
  height: 150px;
  margin: 20px;
  position: relative;
    display: flex;
  align-items: center;
  justify-content: center;
  
`;



const TrustComponent: React.FC<{ percentage: number; startYear: number; endYear: number }> = ({ percentage, startYear, endYear }) => {
  return (
    <Card sx={{ maxWidth: 450 }}>
    <CardContent>

    <SemiCircleWrapper>
      <CircularProgressbar
        value={percentage}
        maxValue={100}
        styles={buildStyles({
          pathColor: `rgba(60, 179, 113, ${percentage / 100})`, // Gradient effect can be customized here
          trailColor: "transparent",
          rotation: 0.75, // Start from the bottom center
          strokeLinecap: "butt", // Make the progress path square-ended
        })}
        circleRatio={0.5} 
      />
      <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", textAlign: "center" }}>
        <p >{startYear}</p>
        <p >{endYear}</p>
        <p >{`${percentage}%`}</p>
        <p >Confiabilidade e Intervalo de Árvores</p>
      </div>
    </SemiCircleWrapper>
    </CardContent>
    </Card>
  );
};

export default TrustComponent;
