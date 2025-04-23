
# 🧩 Lead Manager App : Frontend & Backend

A fullstack Lead Management application built with:

- 🖥 **Frontend**: [Next.js](https://nextjs.org/) (React)
- 🛠 **Backend**: [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- 💾 **Database**: [MongoDB Atlas](https://www.mongodb.com/atlas)
- 🌐 **API**: RESTful endpoints for leads
- 🚀 Deployment-ready

---

## 📁 Project Structure

```
lead-manager/
├── backend/               # Express + MongoDB API
│   ├── models/
    ├── controllers/
│   ├── routes/
│   └── index.js
├── frontend/              # Next.js frontend
│   ├── pages/
│   ├── components/
│   └── package.json
├── .env                   # Environment variables (never commit this!)
├── .gitignore
├── package.json           # Optional root scripts
```

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/adujoseph/LeadManager.git
cd LeadManager
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5050
DB_CONNECT_STRING=mongodb+srv://<username>:<password>@cluster.mongodb.net/leadmanager?retryWrites=true&w=majority
```

Start the backend:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs on [http://localhost:3000](http://localhost:3000)  
Backend runs on [http://localhost:5050](http://localhost:5050)

---

## 📬 API Endpoints

### Base URL: `http://localhost:5050/api/leads`

| Method | Endpoint        | Description        |
|--------|------------------|--------------------|
| `GET`  | `/api/leads`     | Get all leads      |
| `POST` | `/api/leads`     | Add a new lead     |
| `GET` | `/api/leads/id`   | Get a lead by ID   |

Sample request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "status": "New"
}
```

---

## 📦 Scripts (Optional Root Setup)

Install `concurrently` if you want to run both servers from the root:

```bash
npm install --save-dev concurrently
```

Update root `package.json`:

```json
"scripts": {
  "dev": "concurrently \"npm run dev --prefix server\" \"npm run dev --prefix frontend\""
}
```

Now run both servers with:

```bash
npm run dev
```

---

## 🧪 Environment Variables

Each folder uses its own `.env`:

- `backend/.env` → for DB + server port
- You can add Vercel/Netlify variables for frontend later

---

## 🚀 Deployment (Optional)

- **Frontend** → [Vercel](https://vercel.com/)
- **Backend** → [Render](https://render.com/) or [Railway](https://railway.app/)
- Use `.env.production` files for secrets in production

---

## 📮 Contact

Made by [Joseph Adu](https://github.com/adujoseph)

---
