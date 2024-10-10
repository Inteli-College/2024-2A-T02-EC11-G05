# Use an official Python runtime as the base image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the model files and all scripts needed for inference
COPY . .

# Command to run the inference service or model processing script
# Replace with the actual script used for processing, e.g., model.py or another relevant script
CMD ["python", "model.py"]
