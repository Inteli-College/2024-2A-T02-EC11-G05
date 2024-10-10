{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Name of the environment
  name = "abundance-brasil-env";

  # List of packages to include in the environment
  buildInputs = [
    # Python environment for backend and model training
    pkgs.python310
    pkgs.python310Packages.pip
    pkgs.python310Packages.virtualenv
    pkgs.python310Packages.fastapi
    pkgs.python310Packages.uvicorn
    pkgs.python310Packages.opencv4
    pkgs.python310Packages.pytorch
    pkgs.python310Packages.pydantic
    pkgs.python310Packages.numpy
    pkgs.python310Packages.python-multipart

    # Node.js environment for frontend development
    pkgs.nodejs_18
    pkgs.yarn

    # Docker and docker-compose for managing containers
    pkgs.docker
    pkgs.docker-compose

    # Other useful tools
    pkgs.git
    pkgs.curl
    pkgs.jq  # JSON processor, useful for debugging API outputs
  ];

  # Commands to run when entering the shell
  shellHook = ''
    echo "Welcome to the Abundance Brasil development environment!"

    # Create a Python virtual environment if it doesn't exist
    if [ ! -d ".venv" ]; then
      python -m venv .venv
    fi

    # Activate the virtual environment
    source .venv/bin/activate

    # Install Python dependencies for backend
    pip install --upgrade pip
    pip install -r backend/requirements.txt

    # Navigate to the frontend directory and install dependencies
    cd frontend/carbon-check
    yarn install
    cd -

    echo "Environment is ready! Python dependencies and Node.js packages are installed."
    echo "You can now run the backend, frontend, or interact with Docker."
  '';
}
