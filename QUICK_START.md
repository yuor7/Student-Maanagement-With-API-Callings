# Quick Start Guide

## Prerequisites
- Node.js (v14+) - [Download](https://nodejs.org/)
- MongoDB - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Git (optional)

## Step 1: Start MongoDB

### Local MongoDB:
```bash
mongod
```

### MongoDB Atlas:
- Create a cluster at https://www.mongodb.com/cloud/atlas
- Replace `MONGODB_URI` in `backend/.env` with your Atlas connection string
- Make sure to add your IP to the IP whitelist

## Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 3: Start Backend Server

```bash
npm start
```

You should see: `Server running on http://localhost:5000`

## Step 4: Install Frontend Dependencies (New Terminal)

```bash
cd frontend
npm install
```

## Step 5: Start Frontend Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Step 6: Test the Application

1. **Home Page**: You should see "Engineering Squad" as the team name
2. **View Members**: Initially empty
3. **Add Member**: Fill in the form and submit
4. **Member Details**: Click on a member card to view/edit/delete

## Common Issues

| Problem | Solution |
|---------|----------|
| MongoDB connection refused | Make sure MongoDB is running or check Atlas connection string |
| Port 5000 already in use | Kill existing process or change PORT in .env |
| Port 3000 already in use | React will prompt to use a different port |
| CORS errors | Ensure backend is running on port 5000 |
| "Cannot GET /api/members" | Make sure backend server is running |

## What's Included

- ✅ 4 main pages with routing
- ✅ Complete CRUD operations
- ✅ Form validation
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states
- ✅ Modern styling with gradients

## Next Steps

1. Customize the team name in `backend/server.js` (line 23)
2. Add more fields to the member form as needed
3. Deploy to Heroku or Vercel
4. Add authentication and user roles

Happy coding! 🚀
