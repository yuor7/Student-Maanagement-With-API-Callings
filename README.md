# 👥 Student Team Members Management Application

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

A comprehensive full-stack web application designed to efficiently manage team members. Built with a modern **React** frontend and a robust **Node.js/Express** backend backed by **MongoDB**.

---

## ✨ Features

- 🏷️ **Display Team Name**: Clear overview of your current team.
- ➕ **Add New Members**: Robust form with built-in validation.
- 📇 **Card Layout**: View all team members in an elegant grid.
- 🔍 **Detailed Views**: Inspect individual member details and history.
- ✏️ **Edit & Update**: Seamlessly modify member information.
- 🗑️ **Delete**: Safely remove members from the team.
- 📱 **Fully Responsive**: Beautiful design across all devices and screen sizes.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library
- **React Router v6** - Navigation
- **Axios** - HTTP requests
- **CSS3** - Custom styling with modern animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB & Mongoose** - Database & Object Data Modeling (ODM)
- **CORS** - Cross-origin resource sharing

---

## 📂 Project Structure

```text
fullstacks/
├── backend/               # Node.js + Express + MongoDB
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── server.js          # Main server file
│   ├── package.json
│   └── .env
│
└── frontend/              # React application
    ├── public/
    ├── src/
    │   ├── components/    # Reusable UI components
    │   ├── pages/         # Page components
    │   ├── styles/        # CSS stylesheets
    │   ├── App.js         # Main app routing
    │   └── index.js       # React entry point
    └── package.json
```

---

## 🚀 Installation & Setup

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local GUI like Compass, or Atlas cloud)
- npm or yarn

### 1. Backend Setup

Open a terminal and navigate to the backend directory:
```bash
cd backend
```

Install the required dependencies:
```bash
npm install
```

Configure your environment variables in a `.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/team-members
PORT=5000
```
*(Note: Update the connection string if you are using MongoDB Atlas)*

Start the backend development server:
```bash
npm run dev
```
> The backend API will be running on `http://localhost:5000`

### 2. Frontend Setup

Open a new terminal window and navigate to the frontend directory:
```bash
cd frontend
```

Install the required dependencies:
```bash
npm install
```

Start the React development server:
```bash
npm start
```
> The frontend application will automatically open in your browser at `http://localhost:3000`

---

## 📡 API Endpoints

### Members API

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/members` | Get all members |
| `GET` | `/api/members/:id` | Get single member by ID |
| `POST` | `/api/members` | Create a new member |
| `PUT` | `/api/members/:id` | Update member details |
| `DELETE` | `/api/members/:id` | Delete a member |

### Team API

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/team` | Get team information |

> **Testing tip**: You can test these APIs using Postman or cURL. For complete API testing instructions, refer to the [API TESTING GUIDE](./API_TESTING_GUIDE.md).

---

## 🗺️ Pages & Routing

- 🏠 **`/`** - Home page (displays team overview and quick stats)
- 👥 **`/members`** - View all members in the directory
- 👤 **`/members/:id`** - View, edit, or delete a specific member's details
- 📝 **`/add-member`** - Form to add a new member

---

## 🗄️ Database Schema

**Member Model (`models/Member.js`)**
```javascript
{
  name: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  bio: { type: String, required: false },
  joinDate: { type: Date, default: Date.now },
  // Timestamps (createdAt, updatedAt) are automatically managed
}
```

---

## 🎨 Design & Styling

The application features a modern, responsive design with:
- 🌈 **Gradient Headers** with intuitive navigation
- 🃏 **Card-based Layouts** for easy scannability
- ✨ **Smooth Animations** and hover transitions
- 📱 **Mobile-First Grid** system
- 💜 **Consistent Color Palette** (Purple/Blue accents)

---

## 💡 Development Tips

- 🔌 **Proxy Setup**: The React frontend is configured with a proxy in `package.json` to seamlessly communicate with the backend port 5000.
- 🔗 **Relative Paths**: All frontend API requests use relative URLs (e.g., `axios.get('/api/members')`).

---

## 🔧 Troubleshooting

<details>
<summary><strong>MongoDB Connection Error</strong></summary>
Ensure MongoDB is running locally (check Services on Windows or use MongoDB Compass). If using Atlas, verify your `MONGODB_URI` string and IP whitelist.
</details>

<details>
<summary><strong>Port Already in Use</strong></summary>
If port 5000 or 3000 is taken, change the `PORT` in the backend `.env` file, and ensure you update the `proxy` field in the frontend `package.json`.
</details>

<details>
<summary><strong>CORS Issues</strong></summary>
Ensure the `cors` middleware is properly configured in `server.js`. If you changed the frontend port, you might need to update CORS settings.
</details>

---

## 🚀 Future Enhancements

- [ ] 🔐 User authentication (Login/Register)
- [ ] 🖼️ Member profile pictures upload
- [ ] 🔍 Search and filter functionality
- [ ] 🛡️ Roles and permissions management
- [ ] 📊 Export member data (CSV/PDF)
- [ ] 📋 Member activity logs

---

*This project is open source and available under the MIT License.*
