# Production Readiness Checklist - TORANCE LIFE SCIENCE PVT. LTD.

## 1. Codebase & Build Verification
- [x] Frontend TypeScript compilation (`npx tsc --noEmit`) passes with 0 errors.
- [x] Backend TypeScript compilation (`npx tsc --noEmit`) passes with 0 errors.
- [x] Frontend Vite production bundling (`npm run build`) builds `dist/` successfully.
- [x] Backend TypeScript build (`npm run build`) builds `dist/` successfully.
- [x] No `localhost` API URLs hardcoded in production frontend (`api.ts` uses `import.meta.env.VITE_API_URL`).

## 2. Security & Privacy Audit
- [x] JWT tokens used for all protected `/api/admin/*` and mutation routes.
- [x] Passwords hashed using Bcrypt (10 salt rounds).
- [x] Helmet HTTP security headers enabled.
- [x] Rate limiting configured on public endpoints (300 req / 15 min).
- [x] Server-side Zod validation enabled for business enquiry submissions.
- [x] Created `backend/.env.example` and `frontend/.env.example`.
- [x] Hardened Bcrypt database verification in `authController.ts`.
- [x] Created root `.gitignore` protecting secrets, `.env` files, and `dist/` build outputs.

## 3. Database & Storage Configuration
- [x] Mongoose models (`Product`, `Category`, `Enquiry`, `Career`, `User`) fully defined.
- [x] Local MongoDB database connected and tested (`127.0.0.1:27017/torance_pharma`).
- [x] Implemented direct Cloudinary image upload endpoint (`POST /api/products/upload-image`) and file input widget.

## 4. Business Enquiry & Email Delivery
- [x] Inquiry forms collect `fullName`, `email`, `phone`, `enquiryType`, `city`, `companyName`, and `message`.
- [x] Enquiries saved in MongoDB and displayed in Admin Portal with status updates.
- [x] Nodemailer HTML email template created in `emailSender.ts`.

## 5. Deployment & Domain Configuration
- [x] Added `frontend/vercel.json` for SPA route rewrites.
- [x] Added `backend/render.yaml` deployment specification.
- [x] Verified HTTPS SSL readiness.

## 6. SEO & Google Search Indexing
- [x] `sitemap.xml` generated in `frontend/public/sitemap.xml`.
- [x] `robots.txt` generated in `frontend/public/robots.txt`.
- [x] Embedded Schema.org `Organization` & `MedicalBusiness` JSON-LD data and OpenGraph meta tags in `frontend/index.html`.
