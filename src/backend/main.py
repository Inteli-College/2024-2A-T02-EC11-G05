from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse, FileResponse
from datetime import datetime
import os
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Onde vamos salvar as fotos
UPLOAD_DIR = "resources"

# Garantindo que a rota existe
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Rota para fazer upload de arquivos 
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        # Colocando nome do arquivo com o timestamp
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        _, file_extension = os.path.splitext(file.filename)  # Get the original file extension
        new_filename = f"{timestamp}{file_extension}"
        file_location = os.path.join(UPLOAD_DIR, new_filename)
        
        with open(file_location, "wb") as buffer:
            buffer.write(await file.read())
        
        return JSONResponse(content={"message": "Enviado com sucesso"}, status_code=200)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro: {str(e)}")

# Rota para verificar se o servidor está online
@app.get("/ping")
async def ping():
    return JSONResponse(content={"message": "pong"}, status_code=200)

# Rota que retorna o arquivo mais recente para fazer a previsão 
@app.get("/latest-image")
def get_latest_image():
    try:
        # List all files in the upload directory
        files = [f for f in os.listdir(UPLOAD_DIR) if os.path.isfile(os.path.join(UPLOAD_DIR, f))]
        
        # Filter out files that don't have a datetime-based filename
        datetime_files = [f for f in files if f.split('.')[0].isdigit()]

        # If there are no files, return a 404 error
        if not datetime_files:
            raise HTTPException(status_code=404, detail="No images found")

        # Sort files by their datetime portion in descending order
        latest_file = max(datetime_files, key=lambda f: datetime.strptime(f.split('.')[0], "%Y%m%d%H%M%S"))

        # Return the most recent file as a response
        file_path = os.path.join(UPLOAD_DIR, latest_file)
        return FileResponse(file_path, media_type="image/jpeg", filename=latest_file)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro: {str(e)}")

# Para rodar
### uvicorn main:app --reload
