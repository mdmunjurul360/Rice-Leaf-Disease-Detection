from fastapi import FastAPI

app = FastAPI(title="Rice Leaf Disease Detection API")

@app.get("/")
def read_root():
    return {"message": "Rice Leaf Disease Detection API is running"}
