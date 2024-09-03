import React from "react";
import styled from "styled-components";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CircleContainer = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TreeIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #a8d5ba; // Light green background
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "🌳"; // Tree emoji
    font-size: 24px;
  }
`;

const TreeINumber: React.FC<{ totalTrees: number }> = ({ totalTrees }) => {
  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardContent>
      <CircleContainer>
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>{totalTrees}</span>
      </CircleContainer>
      <TreeIcon />
      <p style={{ textAlign: "center", marginTop: "10px" }}>TOTAL ÁRVORES</p>
    </CardContent>
    </Card>
  );
};

export default TreeINumber;
