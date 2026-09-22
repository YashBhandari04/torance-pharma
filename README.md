# TORANCE LIFE SCIENCE PVT. LTD. — Production Corporate Portal & Admin Platform

A real-world, high-performance pharmaceutical corporate web application built for **TORANCE LIFE SCIENCE PVT. LTD.** Inspired by industry leaders (Mankind Pharma, La Renon Healthcare), this platform establishes corporate credibility, showcases verified medicine formulations, handles multi-tier B2B trade inquiries, and provides a secure admin management dashboard.

---

## 🌟 Key Features

- **Dynamic Medicine Directory**: Search formulations in real-time by brand name, generic name, or active composition with category pills, dosage form filters, and pagination.
- **Detailed Specification Pages**: Clinical overview, active composition, dosage strength, packaging specs, storage conditions, and shelf-life period.
- **Specialized Medical Divisions**: Dedicated SBU showcases for *Cardio-Diab*, *Gastro Healthcare*, *Critical Care*, and *Neuro-Life*.
- **R&D & Quality Assurance Showcase**: Highlighting WHO-GMP cleanrooms, HPLC analytical method validation, and GLP compliance.
- **Interactive Trade Enquiry Engine**: Specialized forms for PCD Franchise Distributors, Hospital Suppliers, and Contract Manufacturing partners with automated email notifications.
- **Careers & Talent Portal**: Active job listings with applicant resume submission modal.
- **Secure Admin Dashboard (`/admin`)**: Protected JWT authentication portal for managing products (CRUD), therapeutic categories, business inquiries, and job postings.

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS v4 + Glassmorphism & Custom Design Tokens
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **API Client**: Axios with automatic mock fallback for zero-downtime testing
- **State & Auth**: React Context API (`AuthContext`)

### Backend
- **Server**: Node.js + Express.js + TypeScript
- **Database**: MongoDB Atlas / Local MongoDB + Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT) + Bcryptjs Password Hashing
- **Security**: Helmet HTTP Headers + CORS + Express Rate Limiter
- **Validation**: Zod Server-Side Schema Validation
- **Email Service**: Nodemailer Transaction Email Transporter with HTML Templates

---

## 📂 Project Architecture

```text
torance-pharma/
├── frontend/                     # React + Vite Client Application
│   ├── public/                   # Static assets, sitemap.xml, robots.txt
│   └── src/
│       ├── components/           # Navbar, Footer, Hero, Categories, Products, AdminLayout
│       ├── context/              # AuthContext.tsx
│       ├── data/                 # mockData.ts (baseline medicines & categories)
│       ├── pages/                # Home, About, Products, ProductDetail, Divisions, R&D, Careers, Contact, Admin
│       ├── services/             # Axios API service layer (api.ts)
│       ├── styles/               # index.css with theme tokens & glassmorphism
│       └── types/                # TypeScript Interface definitions
│
└── backend/                      # Node.js + Express REST API Server
    └── src/
        ├── config/               # db.ts (MongoDB connection)
        ├── controllers/          # authController, productController, enquiryController, etc.
        ├── middleware/           # authMiddleware, errorMiddleware, validateMiddleware
        ├── models/               # Product, Category, Enquiry, Career, User (Mongoose)
        ├── routes/               # Express REST route endpoints
        ├── utils/                # seedData.ts, emailSender.ts
        └── server.ts             # Express server entry point
```

---

## 🚀 Quickstart Setup & Execution

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Local MongoDB instance or MongoDB Atlas Connection URI

### 1. Backend Server Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start Express Development Server (Runs on http://localhost:5000)
npm run dev
```

### 2. Database Seeding & Admin User
To seed default therapeutic categories, authentic medicines, and default Admin credentials into MongoDB:
```bash
# Run seed script inside backend directory
npm run seed
```

#### Default Admin Credentials:
- **Email**: `admin@torancelifescience.com`
- **Password**: `Admin@Torance2026!`

---

### 3. Frontend Client Setup
Open a new terminal window:
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Launch Vite Dev Server (Runs on http://localhost:5173)
npm run dev
```

---

## 📡 REST API Documentation

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Healthcheck endpoint | No |
| `POST` | `/api/auth/login` | Admin authentication & JWT token | No |
| `GET` | `/api/auth/me` | Fetch active admin session user | Yes (JWT) |
| `GET` | `/api/products` | Retrieve medicine catalog with filters | No |
| `GET` | `/api/products/:id` | Retrieve single product specification | No |
| `POST` | `/api/products` | Create new medicine formulation | Yes (JWT) |
| `PUT` | `/api/products/:id` | Update existing medicine details | Yes (JWT) |
| `DELETE`| `/api/products/:id` | Soft delete / archive product record | Yes (JWT) |
| `GET` | `/api/categories` | List therapeutic categories with counts | No |
| `POST` | `/api/categories` | Create new therapeutic division | Yes (JWT) |
| `POST` | `/api/enquiries` | Submit B2B business inquiry | No (Zod + Rate Limit) |
| `GET` | `/api/enquiries` | List submitted inquiries for trade desk | Yes (JWT) |
| `PATCH` | `/api/enquiries/:id/status`| Update inquiry status (`NEW`, `CONTACTED`)| Yes (JWT) |
| `GET` | `/api/careers` | List active job openings | No |
| `POST` | `/api/careers` | Post new job opening | Yes (JWT) |

---

## 📦 Production Build

```bash
# Build Frontend Bundle (Output: frontend/dist)
cd frontend
npm run build

# Build Backend TypeScript (Output: backend/dist)
cd backend
npm run build
```

---

## 📄 License & Intellectual Property

© {new Date().getFullYear()} **TORANCE LIFE SCIENCE PVT. LTD.** All rights reserved. Confidential corporate code asset.
