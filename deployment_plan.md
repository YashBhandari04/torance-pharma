# Production Deployment Plan - TORANCE LIFE SCIENCE PVT. LTD.

This document outlines the recommended, zero-cost, enterprise-grade production hosting architecture for **TORANCE LIFE SCIENCE PVT. LTD.**

---

## 🏗️ Target Production Architecture

- **Frontend**: Vercel (`frontend` root directory)
- **Backend API**: Render Web Service (`backend` root directory)
- **Database**: MongoDB Atlas (`torance_pharma` database)
- **Image Storage**: Cloudinary CDN
- **Custom Domain**: `torancelifescience.com`

---

## 1. Frontend Hosting (Vercel)

- **Provider**: Vercel
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL` = `https://torance-pharma-backend.onrender.com/api` (or `https://api.torancelifescience.com/api`)
- **SPA Rewrite Rule (`vercel.json`)**: Configured in [`frontend/vercel.json`](file:///c:/Users/rjhim/OneDrive/Desktop/torance-pharma/frontend/vercel.json).

---

## 2. Backend API Hosting (Render / Railway)

- **Provider**: Render (Web Service)
- **Root Directory**: `backend`
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Environment Variables**: Configured in [`backend/render.yaml`](file:///c:/Users/rjhim/OneDrive/Desktop/torance-pharma/backend/render.yaml).

---

## 3. Database Hosting (MongoDB Atlas)

- **Provider**: MongoDB Atlas (M0 Free Tier or M10 Dedicated)
- **Database Name**: `torance_pharma`
- **Initial Migration**: Run `npm run seed` pointing `MONGODB_URI` to Atlas.

---

## 4. Custom Domain Setup (`torancelifescience.com`)

1. **DNS Management**:
   - `CNAME www` -> `cname.vercel-dns.com`
   - `A @` -> `76.76.21.21` (Vercel IP)
2. **SSL/TLS Certificate**: Automatically provisioned by Vercel Let's Encrypt / Render SSL.
