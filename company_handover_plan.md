# Company Handover Plan & Operations Manual

**Organization**: TORANCE LIFE SCIENCE PVT. LTD.  
**Target Audience**: Executive Management, Commercial Sales Leads, & Non-Technical Content Managers  

---

## 1. Administrative Portal Guide

### Accessing Admin Panel
- **URL**: `https://torancelifescience.com/admin/login` (Local test: `http://localhost:5173/admin/login`)
- **Initial Admin Credentials**:
  - Email: `admin@torancelifescience.com`
  - Password: `Admin@Torance2026!`

---

## 2. Routine Medicine & Product Management

Non-technical staff can independently manage company medicines directly from the Admin Panel without code edits or developer assistance.

### How to Add a New Medicine
1. Log in to `/admin/login`.
2. Navigate to **Products Catalog** (`/admin/products`).
3. Click **Add New Product**.
4. Fill in:
   - **Brand Name** (e.g. `TOR-TELMI 40`)
   - **Generic Formulation Name** (e.g. `Telmisartan Tablets IP`)
   - **Composition** (e.g. `Each uncoated tablet contains: Telmisartan IP 40mg`)
   - **Strength & Dosage Form** (Tablet, Capsule, Injectable, Syrup)
   - **Therapeutic Category** (Cardiovascular, Gastro, Antibiotics)
   - **Packaging** (e.g. `10 x 14 Tablets Blister`)
   - **Product Packaging Image** (Upload image file directly using the Upload button)
   - **Approved Indications & Description**
5. Click **Create Product**.
6. **Result**: The medicine instantly appears on the public website catalog (`/products`) and search results without requiring a website rebuild!

### How to Edit or Archive Discontinued Products
- **To Edit**: Click the **Edit** (pencil) icon next to any product row in `/admin/products`, update fields, and click **Update Product**.
- **To Archive/Delete**: Click the **Delete** icon. The product will be removed from the public website immediately.

---

## 3. Business Enquiry Management

1. Navigate to **Business Enquiries** (`/admin/enquiries`).
2. Filter incoming trade inquiries by type (*Distributor*, *Hospital*, *Partnership*, *General*).
3. Review contact details, location, and message contents.
4. Update inquiry status dropdown (`NEW`, `IN_PROGRESS`, `CONTACTED`, `CLOSED`).

---

## 4. Job Openings & Career Listings

1. Navigate to **Job Openings** (`/admin/careers`).
2. Click **Post New Job Opening** to publish positions.
3. Click **Active (Click to Close)** to temporarily unpublish filled roles.

---

## 5. Company Account Ownership Checklist

Torance Life Science must retain full ownership of the following accounts:

- [ ] **Domain Registrar Account** (GoDaddy / Namecheap / Hostinger for `torancelifescience.com`)
- [ ] **Vercel Account** (Frontend Hosting)
- [ ] **Render / Railway Account** (Backend API Hosting)
- [ ] **MongoDB Atlas Account** (Production Database)
- [ ] **Cloudinary Account** (Media Storage)
- [ ] **Google Workspace / SMTP Account** (Business Email)
- [ ] **GitHub Repository** (Source Code)
