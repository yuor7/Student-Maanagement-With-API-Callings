# Student Team Members Management Application

A full-stack web application for managing team members with a React frontend and Node.js/Express backend With Mongodb 

 Features

✅ Display team name  
✅ Add new team members with form validation  
✅ View all team members in a card layout  
✅ View individual member details  
✅ Edit member information  
✅ Delete team members  
✅ Responsive design  

 ## Project Structure
fullstacks/
├── backend/               # Node.js + Express + MongoDB
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API endpoints
│   ├── server.js         # Main server file
│   ├── package.json
│   └── .env
│
└── frontend/             # React application
    ├── public/
    ├── src/
    │   ├── components/   # Reusable components
    │   ├── pages/        # Page components
    │   ├── styles/       # CSS files
    │   ├── App.js        # Main app with routing
    │   └── index.js      # Entry point
    └── package.json
```

## Tech Stack

**Frontend:**
- React 18
- React Router v6
- Axios (HTTP client)
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- CORS

 Installation & Setup

 Prerequisites
- Node.js (v14+)
- MongoDB (Compass GUI)
- npm or yarn

Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (already provided):
```
MONGODB_URI=mongodb://localhost:27017/team-members
PORT=5000
```

4. Update MongoDB connection string if using MongoDB Atlas

5. Start the backend server:
```bash
npm start
```
or for development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`
 Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

API Endpoints
 Members API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/members` | Get all members |
| GET | `/api/members/:id` | Get member by ID |
| POST | `/api/members` | Create new member |
| PUT | `/api/members/:id` | Update member |
| DELETE | `/api/members/:id` | Delete member |

## Testing APIs in Browser
1. Get Team Information
URL: http://localhost:5000/api/team
Method: GET
Expected Response:
 Team API
2. Get All Members
URL: http://localhost:5000/api/members
Method: GET
3. Get Single Member by ID
URL: http://localhost:5000/api/members/[MEMBER_ID]
Replace: [MEMBER_ID] with the actual member ID from the response above
Example: http://localhost:5000/api/members/65abc123def456ghi789jkl
Method: GET
Testing APIs with Postman or cURL
4. Create a New Member (POST)
URL: http://localhost:5000/api/members
Method: POST
Content-Type: multipart/form-data
5. Update a Member (PUT)
URL: http://localhost:5000/api/members/[MEMBER_ID]
Method: PUT
Content-Type: multipart/form-data (if updating image) or application/json
6. Delete a Member (DELETE)
URL: http://localhost:5000/api/members/[MEMBER_ID]
Method: DELETE

cURL Example:

curl -X DELETE http://localhost:5000/api/members/65abc123def456ghi789jkl

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/team` | Get team information |
 Pages & Routes

- **/** - Home page (displays team name and stats)
- **/members** - View all members
- **/members/:id** - View member details (with edit/delete)
- **/add-member** - Add new member form
For More APIs Information Please Refer API TESTING GUIDE
 Member Schema

```javascript
{
  name: String (required),
  role: String (required),
  email: String (required),
  phone: String (required),
  bio: String (optional),
  joinDate: Date,
  timestamps: { createdAt, updatedAt }
}
```
## CSS Styling

The application features a modern, responsive design with:
- Gradient header with navigation
- Card-based layouts
- Smooth animations and transitions
- Mobile-responsive grid system
- Consistent color scheme (purple/blue accent colors)

## Usage

1. **Home Page**: View team overview and quick statistics
2. **View Members**: See all team members in a card layout
3. **Add Member**: Click "Add Member" button and fill in the form
4. **Member Details**: Click on a member card to view full details
5. **Edit**: Click "Edit Member" to update information
6. **Delete**: Click "Delete Member" to remove from team

 Development Tips

- Backend runs on port 5000
- Frontend runs on port 3000
- Proxy is configured in frontend package.json
- All API requests are relative URLs (e.g., `/api/members`)

## Troubleshooting

MongoDB Connection Error:
- Ensure MongoDB is running locally or update MONGODB_URI in .env
- Check if the connection string is correct

Port Already in Use:
- Change PORT in backend .env
- Update frontend proxy in package.json

CORS Issues:
- Ensure CORS middleware is configured in server.js
- Update proxy in frontend if backend port changed

## Future Enhancements

- User authentication
- Member profile pictures
- Search and filter functionality
- Member roles/permissions management
- Export member data
- Member activity log

