from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="FinPilotABI Backend", description="AI Powered Finance Advisor API", version="1.0.0")

class HealthCheckResponse(BaseModel):
    status: str

@app.get("/health", response_model=HealthCheckResponse)
def health_check():
    return {"status": "ok"}
