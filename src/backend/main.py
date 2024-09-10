from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import os

app = FastAPI()

# Onde vamos salvar as fotos
UPLOAD_DIR = "resources"

# Garantindo que a rota existe
os.makedirs(UPLOAD_DIR, exist_ok=True)

# Rota para fazer upload de arquivos 
@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        file_location = os.path.join(UPLOAD_DIR, file.filename)
        
        with open(file_location, "wb") as buffer:
            buffer.write(await file.read())
        
        return JSONResponse(content={"message": "Enviado com sucesso"}, status_code=200)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro: {str(e)}")

# Rota para verificar se o servidor está online
@app.get("/ping")
async def ping():
    return JSONResponse(content={"message": "pong"}, status_code=200)