# Sample Database Structure and Data

## MongoDB Collection: team-members

### Database: team-members
### Collection: Team Members

---

## Schema Definition

```javascript
{
  _id: ObjectId,                 // MongoDB auto-generated ID
  name: String,                  // Required - Member's full name
  role: String,                  // Required - Job role/title
  email: String,                 // Required - Email address
  phone: String,                 // Required - Contact number
  rollNumber: String,            // Required - Student/Employee ID
  year: String,                  // Required - Year/Class/Level
  bio: String,                   // Optional - About member
  image: String,                 // Optional - Image filename
  joinDate: Date,                // Auto - Join date
  createdAt: Date,               // Auto - Created timestamp
  updatedAt: Date                // Auto - Updated timestamp
}
```

---

## Sample Data Examples

### Example 1: Member with Image
```json
{
  "_id": ObjectId("65abc123def456ghi789jkl"),
  "name": "Dharani",
  "role": "Full Stack Developer",
  "email": "dharani@example.com",
  "phone": "+1234567890",
  "rollNumber": "101",
  "year": "2nd Year",
  "bio": "Passionate developer with expertise in React and Node.js",
  "image": "1682251800000-9876543210.jpg",
  "joinDate": "2026-04-20T10:30:00Z",
  "createdAt": "2026-04-20T10:30:00Z",
  "updatedAt": "2026-04-20T10:30:00Z"
}
```

### Example 2: Member with Image
```json
{
  "_id": ObjectId("65def456ghi789jkl012mno"),
  "name": "Ajay",
  "role": "Frontend Developer",
  "email": "ajay@example.com",
  "phone": "+1987654321",
  "rollNumber": "103",
  "year": "2nd Year",
  "bio": "React specialist with creative UI/UX skills",
  "image": "1682251920000-1234567890.jpg",
  "joinDate": "2026-04-21T09:15:00Z",
  "createdAt": "2026-04-21T09:15:00Z",
  "updatedAt": "2026-04-21T09:15:00Z"
}
```

### Example 3: Member with Image
```json
{
  "_id": ObjectId("65ghi789jkl012mno345pqr"),
  "name": "Kavi",
  "role": "UI/UX Designer",
  "email": "kavi@example.com",
  "phone": "+1555666777",
  "rollNumber": "105",
  "year": "3rd Year",
  "bio": "Creative designer with eye for details and user experience",
  "image": "1682252040000-5555555555.jpg",
  "joinDate": "2026-04-19T14:45:00Z",
  "createdAt": "2026-04-19T14:45:00Z",
  "updatedAt": "2026-04-19T14:45:00Z"
}
```

### Example 4: Member without Image
```json
{
  "_id": ObjectId("65jkl012mno345pqr678stu"),
  "name": "Priya",
  "role": "Backend Developer",
  "email": "priya@example.com",
  "phone": "+1777888999",
  "rollNumber": "104",
  "year": "3rd Year",
  "bio": "Database expert with MongoDB specialization",
  "image": null,
  "joinDate": "2026-04-22T11:20:00Z",
  "createdAt": "2026-04-22T11:20:00Z",
  "updatedAt": "2026-04-22T11:20:00Z"
}
```

---

## Image File Storage

Images are stored in the `backend/uploads/` directory with format:
```
[timestamp]-[random].jpg
```

Example filenames:
```
1682251800000-9876543210.jpg
1682251920000-1234567890.jpg
1682252040000-5555555555.jpg
```

**Access via browser:**
```
http://localhost:5000/uploads/1682251800000-9876543210.jpg
```

---

## API Response Examples

### GET /api/members - All Members
```json
[
  {
    "_id": "65abc123def456ghi789jkl",
    "name": "Dharani",
    "role": "Full Stack Developer",
    "email": "dharani@example.com",
    "phone": "+1234567890",
    "rollNumber": "101",
    "year": "2nd Year",
    "bio": "Passionate developer with expertise in React and Node.js",
    "image": "1682251800000-9876543210.jpg",
    "joinDate": "2026-04-20T10:30:00.000Z",
    "createdAt": "2026-04-20T10:30:00.000Z",
    "updatedAt": "2026-04-20T10:30:00.000Z"
  },
  {
    "_id": "65def456ghi789jkl012mno",
    "name": "Ajay",
    "role": "Frontend Developer",
    "email": "ajay@example.com",
    "phone": "+1987654321",
    "rollNumber": "103",
    "year": "2nd Year",
    "bio": "React specialist with creative UI/UX skills",
    "image": "1682251920000-1234567890.jpg",
    "joinDate": "2026-04-21T09:15:00.000Z",
    "createdAt": "2026-04-21T09:15:00.000Z",
    "updatedAt": "2026-04-21T09:15:00.000Z"
  }
]
```

### GET /api/members/:id - Single Member
```json
{
  "_id": "65abc123def456ghi789jkl",
  "name": "Dharani",
  "role": "Full Stack Developer",
  "email": "dharani@example.com",
  "phone": "+1234567890",
  "rollNumber": "101",
  "year": "2nd Year",
  "bio": "Passionate developer with expertise in React and Node.js",
  "image": "1682251800000-9876543210.jpg",
  "joinDate": "2026-04-20T10:30:00.000Z",
  "createdAt": "2026-04-20T10:30:00.000Z",
  "updatedAt": "2026-04-20T10:30:00.000Z"
}
```

### POST /api/members - Create Member
**Request (multipart/form-data):**
```
name: "Sarah Johnson"
role: "UI/UX Designer"
email: "sarah@example.com"
phone: "+1987654321"
rollNumber: "102"
year: "3rd Year"
bio: "Creative designer with passion for UI"
image: [file]
```

**Response:**
```json
{
  "_id": "65mno345pqr678stu901vwx",
  "name": "Sarah Johnson",
  "role": "UI/UX Designer",
  "email": "sarah@example.com",
  "phone": "+1987654321",
  "rollNumber": "102",
  "year": "3rd Year",
  "bio": "Creative designer with passion for UI",
  "image": "1682252160000-7777777777.jpg",
  "joinDate": "2026-04-23T15:36:00.000Z",
  "createdAt": "2026-04-23T15:36:00.000Z",
  "updatedAt": "2026-04-23T15:36:00.000Z"
}
```

---

## MongoDB Queries for Testing

### Find all members:
```javascript
db.team members.find({})
```

### Find member by name:
```javascript
db.teamMembers.find({ name: "Dharani" })
```

### Find members by year:
```javascript
db.teamMembers.find({ year: "2nd Year" })
```

### Find members by role:
```javascript
db.teamMembers.find({ role: "Full Stack Developer" })
```

### Count total members:
```javascript
db.teamMembers.count({})
```

### Find members with images:
```javascript
db.teamMembers.find({ image: { $ne: null } })
```

### Find members without images:
```javascript
db.teamMembers.find({ image: null })
```

### Update member:
```javascript
db.teamMembers.updateOne(
  { _id: ObjectId("65abc123def456ghi789jkl") },
  { $set: { role: "Senior Full Stack Developer" } }
)
```

### Delete member:
```javascript
db.teamMembers.deleteOne({ _id: ObjectId("65abc123def456ghi789jkl") })
```

---

## Key Points

1. **Image Field**: Stores only the filename, not the full path
2. **Image Access**: Construct URL using `/uploads/[filename]`
3. **Timestamps**: All dates in ISO 8601 format
4. **IDs**: 24-character MongoDB ObjectID strings
5. **Optional Fields**: Bio and image can be null/empty
6. **Required Fields**: name, role, email, phone, rollNumber, year

---

## Creating Sample Data via API

You can populate the database using the frontend application:

1. Start the application
2. Go to "Add Member" page
3. Fill in all required fields:
   - Name
   - Roll Number
   - Year
   - Role
   - Email
   - Phone
   - Bio (optional)
   - Profile Photo (required in form, optional in database)
4. Click Submit

Or use cURL to create members:

```bash
curl -X POST http://localhost:5000/api/members \
  -F "name=Dharani" \
  -F "role=Full Stack Developer" \
  -F "email=dharani@example.com" \
  -F "phone=+1234567890" \
  -F "rollNumber=101" \
  -F "year=2nd Year" \
  -F "bio=Passionate developer with expertise in React and Node.js" \
  -F "image=@/path/to/dharani-photo.jpg"
```

---

Generated: April 23, 2026
