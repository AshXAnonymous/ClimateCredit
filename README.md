# Climate Credit Backend

This functions as a centralized control layer that normalizes industrial emission inputs and maps them into a structured data model governed by role-based access. It orchestrates authentication, industry-scoped data segregation, and emission lifecycle handling, while abstracting calculation logic into climate scoring mechanisms. Aggregated and individual datasets are exposed through controlled endpoints to support analytical dashboards, enabling longitudinal comparisons, system-wide visibility, and integrity-driven evaluation without exposing raw operational complexity.

---

## Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Setup](#setup)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **User Authentication & Roles**: `admin`, `owner`, `user`
- **Industry Management**: Owners can create and update their industry
- **Emission Tracking**: Owners can add emission records with report images
- **Climate Score Calculation**: Automatically calculates score based on emissions
- **Dashboard**:
  - Global overview of industries
  - Leaderboard (Top 3 industries)
  - Individual industry overview for owners
- **Secure Passwords**: Bcrypt hashed passwords
- **JWT-based Authentication**

---

## Technologies

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcryptjs for password hashing
- multer for image uploads (optional)

---

## Setup

1. **Clone the repository**:

```bash
git clone https://github.com/ayush786hack/climate-credit-backend.git
cd climate-credit-backend

##Install dependencies
npm install


##Create .env file:

PORT=8080
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>




---



##Structure of folders and files
# Climate Credit Backend

This directory contains the backend server code for the Climate Credit System.

## Folder Structure

- `controllers/` – API logic for users, industries, emissions
- `middleware/` – authentication, error handling
- `models/` – Mongoose schemas for Users, Industries, EmissionRecords
- `routes/` – Express routes for API endpoints
- `seed.js` – seed database with test data
- `server.js` – main server file

---

## API Endpoints

### Authentication

- `POST /users/register` – register new users
- `POST /users/login` – login and get JWT token

### Industry Management (Owner Only)

- `POST /industries/create` – create a new industry
- `GET /industries/my-industry` – get your industry
- `PUT /industries/my-industry` – update your industry
- `POST /industries/my-industry/emission` – add emission

### Dashboard

- `GET /industries/dashboard` – combined global & user overview
- `GET /industries/global-score` – global overview
- `GET /industries/top` – top 3 industries leaderboard

---

## Environment Variables

Create a `.env` file in the root:

