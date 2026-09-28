# Network Elements Ltd - Company Website

A modern, interactive company website for Network Elements Ltd, Dublin's premier IT and network solutions provider. Built with React frontend, Python FastAPI backend, and SQLite database.

## Company Overview

**Network Elements Ltd** is a Dublin-based company specializing in:
- Network Engineering
- IT Support
- Network Management
- IT Infrastructure Solutions

## Tech Stack

- **Frontend**: React with Vite
- **Backend**: FastAPI (Python)
- **Database**: SQLite with SQLAlchemy ORM
- **Styling**: Custom CSS with modern dark theme and animations

## Project Structure

```
Project_201/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── App.jsx    # Main React component with all sections
│   │   └── App.css    # Modern dark theme styling
│   └── package.json
├── backend/           # Python FastAPI backend
│   ├── main.py        # FastAPI application and API endpoints
│   ├── database.py    # Database configuration
│   ├── models.py      # SQLAlchemy models (Services, Testimonials, Contact)
│   ├── schemas.py     # Pydantic schemas for validation
│   ├── requirements.txt
│   └── .env           # Environment variables
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Start the backend server:
```bash
uvicorn main:app --reload
```

The backend will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory (in a new terminal):
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

The backend provides the following REST API endpoints:

### General
- `GET /` - Company information and welcome message

### Services
- `GET /services` - Get all services
- `POST /services` - Create a new service

### Testimonials
- `GET /testimonials` - Get all approved testimonials
- `POST /testimonials` - Submit a new testimonial

### Contact
- `POST /contact` - Submit contact form
- `GET /contact` - Get all contact submissions (admin)

## Website Features

### Sections
- **Hero Section**: Animated network visualization with company branding
- **Services Section**: Four core services with hover effects
- **About Section**: Company information with statistics and animated server rack
- **Testimonials Section**: Client reviews with star ratings
- **Contact Section**: Functional contact form with backend integration
- **Footer**: Quick links and service information

### Design Features
- Modern dark theme with gradient accents
- Smooth scroll navigation
- Animated network nodes and connections
- Interactive service cards with hover effects
- Responsive design for all screen sizes
- Glassmorphism effects on cards and forms

### Services Offered
1. **Network Engineering** - Design and implementation of network architectures
2. **IT Support** - 24/7 technical support and troubleshooting
3. **Network Management** - Comprehensive monitoring and optimization
4. **IT Infrastructure** - End-to-end infrastructure solutions

## Database Schema

### Services Table
- `id` (Integer, Primary Key)
- `title` (String)
- `description` (Text)
- `icon` (String)
- `order` (Integer)

### Testimonials Table
- `id` (Integer, Primary Key)
- `name` (String)
- `company` (String)
- `content` (Text)
- `rating` (Integer)
- `approved` (Boolean)
- `created_at` (DateTime)

### Contact Table
- `id` (Integer, Primary Key)
- `name` (String)
- `email` (String)
- `phone` (String, Optional)
- `company` (String, Optional)
- `message` (Text)
- `created_at` (DateTime)

## Development

### Backend Development

- The backend uses FastAPI with automatic API documentation
- Visit `http://localhost:8000/docs` for interactive API documentation (Swagger UI)
- Visit `http://localhost:8000/redoc` for alternative documentation (ReDoc)

### Frontend Development

- The frontend uses React with Vite for fast development
- Hot module replacement (HMR) is enabled
- Changes to code will automatically reflect in the browser

## Environment Variables

Backend environment variables (in `backend/.env`):

```
DATABASE_URL=sqlite:///./app.db
```

You can change the database URL to use PostgreSQL or MySQL instead of SQLite.

## Production Deployment

For production deployment, consider:

1. **Frontend**: Build the React app with `npm run build` and serve with a web server like Nginx
2. **Backend**: Use a production ASGI server like Gunicorn with Uvicorn workers
3. **Database**: Use a production database like PostgreSQL instead of SQLite
4. **Environment**: Use proper environment variable management
5. **Security**: Implement rate limiting, input validation, and HTTPS

## Contact Information

- **Location**: Dublin, Ireland
- **Email**: info@networkelements.ie
- **Phone**: +353 1 234 5678
- **Support**: 24/7 Available

## License

This project is the official website of Network Elements Ltd. All rights reserved.
