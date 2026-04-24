# Installation & Verification Checklist

## Pre-Installation Requirements
- [ ] Node.js v14+ installed
- [ ] MongoDB installed and running
- [ ] npm or yarn available
- [ ] Git (optional)

## Installation Steps

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```
Expected packages:
- [ ] express
- [ ] mongoose
- [ ] cors
- [ ] dotenv
- [ ] multer (NEW - for image upload)

### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```
Expected packages:
- [ ] react
- [ ] react-dom
- [ ] react-router-dom
- [ ] axios

### Step 3: Verify .env Configuration
Check `backend/.env`:
```
MONGODB_URI=mongodb://localhost:27017/team-members
PORT=5000
```

## Backend Verification

### Check Backend Structure
- [ ] `backend/server.js` exists
- [ ] `backend/package.json` has multer dependency
- [ ] `backend/models/TeamMember.js` has all fields:
  - name, role, email, phone, bio
  - rollNumber (NEW)
  - year (NEW)
  - image (NEW)
- [ ] `backend/routes/members.js` exists with image upload
- [ ] `backend/middleware/multerConfig.js` exists
- [ ] `backend/uploads/` directory exists

### Start Backend
```bash
cd backend
npm start
```
Expected output:
```
MongoDB connected
Server running on http://localhost:5000
```

### Test Backend Endpoints
- [ ] `http://localhost:5000/api/team` returns JSON
- [ ] `http://localhost:5000/api/members` returns empty array or members

## Frontend Verification

### Check Frontend Structure
- [ ] `frontend/src/pages/Home.js` - TEAM BLUE landing page
- [ ] `frontend/src/pages/AddMember.js` - Form with image upload
- [ ] `frontend/src/pages/ViewMembers.js` - Grid with "MEET OUR AMAZING TEAM"
- [ ] `frontend/src/pages/MemberDetails.js` - Member details with image
- [ ] `frontend/src/components/MemberCard.js` - Card with image and details
- [ ] All CSS files updated with blue theme

### Start Frontend
```bash
cd frontend
npm start
```
Expected:
- [ ] Application opens at http://localhost:3000
- [ ] "TEAM BLUE" title visible on home page
- [ ] Navigation header with links works
- [ ] No console errors

## Feature Verification

### Home Page ✅
- [ ] Displays "TEAM BLUE" title
- [ ] Shows "Welcome to the BLUE Team Management" subtitle
- [ ] Has "Add Member" button
- [ ] Has "View Members" button
- [ ] Buttons are clickable and navigate correctly

### Add Member Page ✅
- [ ] All form fields visible:
  - Name
  - Roll Number (NEW)
  - Year (NEW)
  - Role
  - Email
  - Phone
  - About Project (bio)
  - Profile Photo upload (NEW)
- [ ] Image preview works
- [ ] Browse button opens file picker
- [ ] Submit button creates member
- [ ] Success message appears
- [ ] Redirects to members list

### View Members Page ✅
- [ ] Title shows "MEET OUR AMAZING TEAM"
- [ ] Member cards display in grid
- [ ] Each card shows:
  - Profile image
  - Member name
  - Role
  - Roll Number (NEW)
  - Year (NEW)
  - "VIEW DETAILS" button
- [ ] Cards are clickable
- [ ] Responsive layout on different screen sizes

### Member Details Page ✅
- [ ] Large profile image displays at top (NEW)
- [ ] All member information visible:
  - Name, Role
  - Email (clickable link)
  - Phone (clickable link)
  - Roll Number (NEW)
  - Year (NEW)
  - Bio
  - Join date
- [ ] Edit button works
- [ ] Delete button works with confirmation
- [ ] Back button returns to members list

## API Testing Checklist

### Test Endpoints
- [ ] GET `/api/team` - Returns team name
- [ ] GET `/api/members` - Returns members array
- [ ] GET `/api/members/:id` - Returns single member with all fields
- [ ] POST `/api/members` - Creates member with image
- [ ] PUT `/api/members/:id` - Updates member
- [ ] DELETE `/api/members/:id` - Deletes member and image

### Test Image Upload
- [ ] Image file uploading works
- [ ] Image stored in `backend/uploads/`
- [ ] Image filename in database
- [ ] Image accessible via `/uploads/[filename]`
- [ ] Image displays in member cards
- [ ] Image displays in member details
- [ ] Image deletes when member deleted

## Database Verification

### Check MongoDB
```bash
# Connect to MongoDB
mongosh
```

```javascript
// Switch to database
use team-members

// Check collection
db.team members.find()

// Check member fields
db.teamMembers.find({}, { 
  name: 1, 
  role: 1, 
  rollNumber: 1, 
  year: 1, 
  image: 1 
})
```

### Verify Fields in Database
Each member document should have:
- [ ] _id (ObjectId)
- [ ] name (String)
- [ ] role (String)
- [ ] email (String)
- [ ] phone (String)
- [ ] rollNumber (String) ✅ NEW
- [ ] year (String) ✅ NEW
- [ ] bio (String)
- [ ] image (String - filename) ✅ NEW
- [ ] joinDate (Date)
- [ ] createdAt (Date)
- [ ] updatedAt (Date)

## Browser Testing

### In Google Chrome DevTools

#### Network Tab
- [ ] API calls show 200 status
- [ ] No CORS errors
- [ ] Image files load correctly

#### Console Tab
- [ ] No JavaScript errors
- [ ] Axios requests successful

#### Application Tab
- [ ] Images stored in uploads folder

## Performance Checks

- [ ] Page loads in < 2 seconds
- [ ] Images load quickly
- [ ] No memory leaks
- [ ] Smooth interactions
- [ ] Responsive design works

## Deployment Readiness

- [ ] All .env files configured correctly
- [ ] No console errors in production
- [ ] Images persist after restart
- [ ] Database changes persist
- [ ] Frontend builds successfully

## Documentation Verification

- [ ] README.md - Complete installation guide ✅
- [ ] QUICK_START.md - Quick setup guide ✅
- [ ] API_TESTING_GUIDE.md - API testing instructions ✅ NEW
- [ ] DATABASE_STRUCTURE.md - Database schema and examples ✅ NEW
- [ ] UPDATES_SUMMARY.md - All changes documented ✅ NEW

## Troubleshooting Checklist

If something doesn't work:

### Backend Issues
- [ ] MongoDB is running (`mongod` command)
- [ ] Port 5000 is not in use
- [ ] Dependencies installed (`npm install`)
- [ ] Backend started (`npm start`)
- [ ] Check `backend/.env` file

### Frontend Issues
- [ ] Node modules installed (`npm install`)
- [ ] Backend running (check console for connection)
- [ ] Port 3000 is not in use
- [ ] Frontend started (`npm start`)
- [ ] Clear browser cache (Ctrl+Shift+Del)

### Image Upload Issues
- [ ] `backend/uploads/` directory exists
- [ ] Write permissions on uploads folder
- [ ] Image file < 5MB
- [ ] Image format is jpg/png/gif/webp
- [ ] Multer installed (`npm install multer`)

### Database Issues
- [ ] MongoDB connection string correct in .env
- [ ] MongoDB URI accessible
- [ ] Database exists (`team-members`)
- [ ] Collections created (auto-created on first insert)

## Final Verification

Run this checklist after full setup:

1. **Start Services**
   ```bash
   # Terminal 1
   mongod
   
   # Terminal 2
   cd backend && npm start
   
   # Terminal 3
   cd frontend && npm start
   ```

2. **Test Home Page**
   - [ ] Navigate to http://localhost:3000
   - [ ] See TEAM BLUE landing page

3. **Add a Member**
   - [ ] Click "Add Member"
   - [ ] Fill all fields
   - [ ] Select an image
   - [ ] Click Submit
   - [ ] Redirects to members list

4. **View Members**
   - [ ] See member card with image
   - [ ] See roll number and year
   - [ ] Click "VIEW DETAILS"

5. **View Details**
   - [ ] See large profile image
   - [ ] See all member info
   - [ ] Try Edit and Delete buttons

6. **Test APIs**
   - [ ] Open http://localhost:5000/api/members
   - [ ] Verify member data in JSON

## Success Indicators ✅

Application is working correctly if:
- ✅ All pages load without errors
- ✅ Images upload and display correctly
- ✅ All member information saves to database
- ✅ All CRUD operations work (Create, Read, Update, Delete)
- ✅ Responsive design works on mobile
- ✅ Blue color scheme consistent throughout
- ✅ API endpoints return correct data

## Next Steps

Once verified, you can:
1. Add more team members with images
2. Deploy to production server
3. Add user authentication
4. Add search/filter functionality
5. Add member roles and permissions

---

Generated: April 23, 2026
Last Updated: April 23, 2026
