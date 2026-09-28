from sqlalchemy import Column, Integer, String, Boolean, DateTime, Text, Float
from sqlalchemy.sql import func
from database import Base

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    icon = Column(String)
    order = Column(Integer, default=0)

class Testimonial(Base):
    __tablename__ = "testimonials"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    company = Column(String)
    content = Column(Text)
    rating = Column(Integer, default=5)
    approved = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, index=True)
    phone = Column(String)
    company = Column(String)
    message = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class EngineerReport(Base):
    __tablename__ = "engineer_reports"

    id = Column(Integer, primary_key=True, index=True)
    ticket_number = Column(String, index=True)
    customer = Column(String)
    customer_ref = Column(String)
    site = Column(String)
    tech_name = Column(String)
    date = Column(String)
    left_homebase = Column(String)
    onsite = Column(String)
    offsite = Column(String)
    arrive_homebase = Column(String)
    distance_traveled = Column(Float)
    remote_engineer = Column(String)
    local_contact = Column(String)
    tasks = Column(Text)
    travel_food = Column(Float)
    pn = Column(String)
    sn = Column(String)
    tracking_number = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
