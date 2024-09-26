from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse, FileResponse
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todas as origens
    allow_credentials=True,
    allow_methods=["*"],  # Permitir todos os métodos (GET, POST, etc.)
    allow_headers=["*"],  # Permitir todos os cabeçalhos
)

# Diretório para armazenar as imagens enviadas
UPLOAD_DIR = "resources"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

# Função que calcula métricas simples com base no número de árvores
def calculate_metrics(num_trees: int):
    co2_per_tree = 48  # kg por árvore por ano
    oxygen_per_tree = 117  # kg por árvore por ano
    water_per_tree = 378  # litros por árvore por dia
    soil_per_tree = 200  # kg por árvore por ano
    species_per_tree = 10  # até 10 espécies por árvore

    total_co2 = num_trees * co2_per_tree
    total_oxygen = num_trees * oxygen_per_tree
    total_water = num_trees * water_per_tree * 365  # Em litros por ano
    total_soil = num_trees * soil_per_tree
    total_species = num_trees * species_per_tree

    return {
        "total_co2": total_co2,
        "total_oxygen": total_oxygen,
        "total_water": total_water,
        "total_soil": total_soil,
        "total_species": total_species
    }

# Rota para fazer upload de arquivos
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        # Salvar a imagem enviada
        file_location = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_location, "wb") as buffer:
            buffer.write(await file.read())

        return {"message": "Imagem enviada com sucesso.", "filename": file.filename}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro: {str(e)}")

# Rota para calcular métricas das árvores
@app.post("/calculate-metrics")
async def calculate_tree_metrics(payload: dict):
    try:
        num_trees = payload.get("num_trees")
        if num_trees is None:
            raise HTTPException(status_code=400, detail="Campo 'num_trees' é obrigatório.")

        metrics = calculate_metrics(num_trees)
        return JSONResponse(content=metrics, status_code=200)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao calcular métricas: {str(e)}")

# Rota para retornar a última imagem enviada
@app.get("/latest-image/{image_name}")
def get_latest_image(image_name: str):
    image_path = os.path.join(UPLOAD_DIR, image_name)
    if os.path.exists(image_path):
        return FileResponse(image_path)
    else:
        raise HTTPException(status_code=404, detail="Imagem não encontrada.")


@app.get("/latest-image")
def get_latest_image():
    try:
        # Listar os arquivos no diretório de uploads
        files = os.listdir(UPLOAD_DIR)
        if not files:
            raise HTTPException(status_code=404, detail="Nenhuma imagem encontrada.")

        # Pegar o arquivo mais recente
        latest_file = max(files, key=lambda x: os.path.getctime(os.path.join(UPLOAD_DIR, x)))

        # Retornar a imagem mais recente
        return FileResponse(os.path.join(UPLOAD_DIR, latest_file))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao recuperar a imagem: {str(e)}")
