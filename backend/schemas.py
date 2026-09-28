from pydantic import BaseModel
from datetime import datetime
from typing import Optional

# Service Schemas
class ServiceBase(BaseModel):
    title: str
    description: str
    icon: str
    order: int = 0

class ServiceCreate(ServiceBase):
    pass

class Service(ServiceBase):
    id: int

    class Config:
        from_attributes = True

# Testimonial Schemas
class TestimonialBase(BaseModel):
    name: str
    company: str
    content: str
    rating: int = 5

class TestimonialCreate(TestimonialBase):
    pass

class Testimonial(TestimonialBase):
    id: int
    approved: bool
    created_at: datetime

    class Config:
        from_attributes = True

# Contact Schemas
class ContactBase(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    message: str

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Engineer Report Schemas
class EngineerReportBase(BaseModel):
    ticket_number: str
    customer: str
    customer_ref: Optional[str] = None
    site: str
    tech_name: str
    date: str
    left_homebase: Optional[str] = None
    onsite: Optional[str] = None
    offsite: Optional[str] = None
    arrive_homebase: Optional[str] = None
    distance_traveled: Optional[float] = None
    remote_engineer: Optional[str] = None
    local_contact: Optional[str] = None
    tasks: str
    travel_food: Optional[float] = None
    pn: Optional[str] = None
    sn: Optional[str] = None
    tracking_number: Optional[str] = None

class EngineerReportCreate(EngineerReportBase):
    pass

class EngineerReport(EngineerReportBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True
