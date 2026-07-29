# Rice Leaf Disease Detection

A full-stack thesis project for intelligent rice leaf disease detection and treatment recommendation.

## Project Structure

- frontend/: React + Vite + TypeScript frontend
- backend/: FastAPI backend service
- ai/: TensorFlow/Keras training, datasets, notebooks, models, and evaluation
- docs/: thesis materials, diagrams, presentations, and references
- assets/: shared project assets

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

## Run the backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Notes

- The frontend UI and functionality remain intact.
- The backend is scaffolded for future API integration.
- The AI module is prepared for future model training work.
