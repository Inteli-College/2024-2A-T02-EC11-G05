import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/Navbar";
import styled from "styled-components";
import Typography from "../components/Typography";

//fontes das letras importadas do google fonts
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

// Estilo para a página com o background da imagem com arvores
const MainContainer = styled.div`
  background-image: url("/trees.png");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Bai Jamjuree", sans-serif;
`;

// seção com fundo branco com gradiente
const SecondSection = styled.div`
  background: linear-gradient(white, #4caf50);
  color: black;
  font-family: "Bai Jamjuree", sans-serif;
  min-height: 120vh;
`;

// barra verde final
const FooterBar = styled.div`
  background-color: #0c823a; /* Cor verde escuro */
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Bai Jamjuree", sans-serif;
`;

const Content = styled.div`
  margin-top: 100px;
  text-align: center;
`;

const MainHeading = styled.h1`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 25px;
  line-height: 1.2;
`;

const SubText = styled.p`
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
  line-height: 1.2;
`;

const UploadButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  border-radius: 30px;
  padding: 15px 50px;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: "Bai Jamjuree", sans-serif;
  cursor: pointer;
  margin-top: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MainPage = () => {
  const navigate = useNavigate(); // Inicializa o hook useNavigate

  const handleUploadClick = () => {
    navigate("/dashboard"); // Redireciona para a página /dashboard
  };

  return (
    <>
      {/* Primeira parte com a imagem de fundo */}
      <MainContainer>
        <NavbarComponent />
        <Content>
          <MainHeading>
            Transformamos a conservação ambiental <br />
            através da tecnologia.
          </MainHeading>
          <SubText>
            <Typography>
              Estamos na vanguarda da tokenização de florestas, <br />
              gerando créditos de carbono que ajudam a manter <br />
              as florestas de pé e a garantir um futuro <br />
              sustentável para o planeta.
            </Typography>
          </SubText>
          <UploadButton onClick={handleUploadClick}>Fazer upload</UploadButton>
        </Content>
      </MainContainer>

      {/*fundo de gradiente */}
      <SecondSection>
        <Typography>Estamos na vanguarda da tokenização de florestas, <br />
            gerando créditos de carbono que ajudam a manter <br />
            as florestas de pé e a garantir um futuro <br /> 
            sustentável para o planeta.</Typography>
      </SecondSection>

      {/* Barra final com o verde escuro */}
      <FooterBar>{/* colocar os dois logos aqui */}</FooterBar>
    </>
  );
};

export default MainPage;
