# Portfolio Website - API & Integration Contracts

## Overview
This document outlines the integration between the frontend portfolio website and backend services, specifically focusing on the CV download functionality.

## Backend Implementation

### API Endpoints

#### 1. Download CV
- **Endpoint**: `GET /api/download-cv`
- **Description**: Generates and downloads a PDF version of the CV
- **Response**: PDF file (application/pdf)
- **Filename**: `Adeyemi_Akinbisade_CV.pdf`
- **Implementation**: Uses reportlab library to generate ATS-friendly PDF

### CV Generator (`cv_generator.py`)
- **Function**: `generate_cv()`
- **Returns**: BytesIO PDF content
- **Features**:
  - 1-page ATS-optimized format
  - Clean, professional layout
  - Sections: Professional Summary, Technical Skills, Experience, Education, Projects, Additional Strengths
  - Uses simple fonts (Helvetica) for ATS compatibility
  - No complex graphics or tables that could confuse ATS systems

## Frontend Implementation

### Components
All components are located in `/app/frontend/src/components/`

1. **Header.jsx** - Sticky navigation with smooth scroll
2. **Hero.jsx** - Main landing section with CTA buttons including Download CV
3. **About.jsx** - Professional summary section
4. **Skills.jsx** - Categorized technical skills display
5. **Experience.jsx** - Professional work history
6. **Education.jsx** - Academic qualifications
7. **Projects.jsx** - Showcase of data analysis projects
8. **Contact.jsx** - Contact information and links
9. **Footer.jsx** - Site footer with social links

### Data Source
- **File**: `/app/frontend/src/data/portfolioData.js`
- **Purpose**: Centralized data storage for portfolio content
- **Exports**: personalInfo, skills, experience, education, projects, additionalStrengths

### CV Download Integration
- **Location**: Hero.jsx component
- **Function**: `handleDownloadCV()`
- **Endpoint Called**: `${BACKEND_URL}/api/download-cv`
- **Behavior**: Opens PDF in new tab for download

### Styling
- **Font**: Inter (Google Fonts)
- **Color Scheme**: Clean light theme with subtle blue accents (#2563eb)
- **Framework**: Tailwind CSS
- **Components**: Shadcn UI components (Button, Card, etc.)

## Project Links Integration (Future)
Currently, project GitHub URLs are empty strings in `portfolioData.js`. To update:

1. Edit `/app/frontend/src/data/portfolioData.js`
2. Update the `githubUrl` field in the projects array
3. The Projects component will automatically show "View on GitHub" button when URLs are present

## Design Principles Applied
- Clean and minimal design (recruiter-friendly)
- ATS-optimized CV format
- Professional color palette (white, dark text, blue accents)
- Responsive layout
- Smooth animations and transitions
- Clear information hierarchy

## Technology Stack
**Frontend:**
- React 19
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- Inter font

**Backend:**
- FastAPI
- ReportLab (PDF generation)
- Python 3.11

## No Mocking
All functionality is fully implemented. No mock data is used for API calls - the CV generator creates real PDFs on demand.
