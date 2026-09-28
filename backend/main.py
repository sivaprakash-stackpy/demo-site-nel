from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

from database import engine, get_db, Base
from models import Service, Testimonial, Contact, EngineerReport
from schemas import (
    ServiceCreate, Service as ServiceSchema,
    TestimonialCreate, Testimonial as TestimonialSchema,
    ContactCreate, Contact as ContactSchema,
    EngineerReportCreate, EngineerReport as EngineerReportSchema
)

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Network Elements Ltd API")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "company": "Network Elements Ltd",
        "location": "Dublin",
        "message": "Welcome to Network Elements Ltd API"
    }

# Services Endpoints
@app.get("/services", response_model=List[ServiceSchema])
def get_services(db: Session = Depends(get_db)):
    services = db.query(Service).order_by(Service.order).all()
    return services

@app.post("/services", response_model=ServiceSchema)
def create_service(service: ServiceCreate, db: Session = Depends(get_db)):
    db_service = Service(**service.dict())
    db.add(db_service)
    db.commit()
    db.refresh(db_service)
    return db_service

# Testimonials Endpoints
@app.get("/testimonials", response_model=List[TestimonialSchema])
def get_testimonials(db: Session = Depends(get_db)):
    testimonials = db.query(Testimonial).filter(Testimonial.approved == True).all()
    return testimonials

@app.post("/testimonials", response_model=TestimonialSchema)
def create_testimonial(testimonial: TestimonialCreate, db: Session = Depends(get_db)):
    db_testimonial = Testimonial(**testimonial.dict())
    db.add(db_testimonial)
    db.commit()
    db.refresh(db_testimonial)
    return db_testimonial

# Contact Endpoints
@app.post("/contact", response_model=ContactSchema)
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

@app.get("/contact", response_model=List[ContactSchema])
def get_contacts(db: Session = Depends(get_db)):
    contacts = db.query(Contact).order_by(Contact.created_at.desc()).all()
    return contacts

# Engineer Reports Endpoints
@app.post("/engineer-reports", response_model=EngineerReportSchema)
def create_engineer_report(report: EngineerReportCreate, db: Session = Depends(get_db)):
    db_report = EngineerReport(**report.dict())
    db.add(db_report)
    db.commit()
    db.refresh(db_report)
    return db_report

@app.get("/engineer-reports", response_model=List[EngineerReportSchema])
def get_engineer_reports(db: Session = Depends(get_db)):
    reports = db.query(EngineerReport).order_by(EngineerReport.created_at.desc()).all()
    return reports
