# API Testing Guide

This guide shows how to test all the API endpoints for the Team Members Management Application.

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/team` | Get team information |
| GET | `/api/members` | Get all members |
| GET | `/api/members/:id` | Get member by ID |
| POST | `/api/members` | Create new member |
| PUT | `/api/members/:id` | Update member |
| DELETE | `/api/members/:id` | Delete member |

## Testing APIs in Browser

### 1. Get Team Information
**URL:** `http://localhost:5000/api/team`  
**Method:** GET  
**Expected Response:**
```json
{
  "teamName": "Engineering Squad"
}
```

### 2. Get All Members
**URL:** `http://localhost:5000/api/members`  
**Method:** GET  
**Expected Response:**
```json
[
  {
    "_id": "member_id_here",
    "name": "John Doe",
    "role": "Full Stack Developer",
    "email": "john@example.com",
    "phone": "+1234567890",
    "rollNumber": "101",
    "year": "2nd Year",
    "bio": "Passionate developer",
    "image": "timestamp-filename.jpg",
    "joinDate": "2026-04-23T10:30:00Z",
    "createdAt": "2026-04-23T10:30:00Z",
    "updatedAt": "2026-04-23T10:30:00Z"
  }
]
```

### 3. Get Single Member by ID
**URL:** `http://localhost:5000/api/members/[MEMBER_ID]`  
**Replace:** `[MEMBER_ID]` with the actual member ID from the response above

**Example:** `http://localhost:5000/api/members/65abc123def456ghi789jkl`

**Method:** GET  
**Expected Response:**
```json
{
  "_id": "65abc123def456ghi789jkl",
  "name": "John Doe",
  "role": "Full Stack Developer",
  "email": "john@example.com",
  "phone": "+1234567890",
  "rollNumber": "101",
  "year": "2nd Year",
  "bio": "Passionate developer",
  "image": "1682251800000-1234567890.jpg",
  "joinDate": "2026-04-23T10:30:00Z",
  "createdAt": "2026-04-23T10:30:00Z",
  "updatedAt": "2026-04-23T10:30:00Z"
}
```

## Testing APIs with Postman or cURL

### 4. Create a New Member (POST)
**URL:** `http://localhost:5000/api/members`  
**Method:** POST  
**Content-Type:** `multipart/form-data`

**Form Data:**
```
- name: "Sarah Johnson" (text)
- role: "UI/UX Designer" (text)
- email: "sarah@example.com" (text)
- phone: "+1987654321" (text)
- rollNumber: "102" (text)
- year: "3rd Year" (text)
- bio: "Creative designer with passion for UI" (text)
- image: [Select image file] (file)
```

**cURL Example:**
```bash
curl -X POST http://localhost:5000/api/members \
  -F "name=Sarah Johnson" \
  -F "role=UI/UX Designer" \
  -F "email=sarah@example.com" \
  -F "phone=+1987654321" \
  -F "rollNumber=102" \
  -F "year=3rd Year" \
  -F "bio=Creative designer with passion for UI" \
  -F "image=@/path/to/image.jpg"
```

### 5. Update a Member (PUT)
**URL:** `http://localhost:5000/api/members/[MEMBER_ID]`  
**Method:** PUT  
**Content-Type:** `multipart/form-data` (if updating image) or `application/json`

**JSON Body Example:**
```json
{
  "name": "Sarah Johnson",
  "role": "Senior UI/UX Designer",
  "email": "sarah.johnson@example.com",
  "phone": "+1987654321",
  "rollNumber": "102",
  "year": "3rd Year",
  "bio": "Creative designer with 5 years experience"
}
```

### 6. Delete a Member (DELETE)
**URL:** `http://localhost:5000/api/members/[MEMBER_ID]`  
**Method:** DELETE

**cURL Example:**
```bash
curl -X DELETE http://localhost:5000/api/members/65abc123def456ghi789jkl
```

## How to Find Member ID

1. Go to `http://localhost:5000/api/members` in your browser
2. Look for the `_id` field in the JSON response
3. Copy the ID and use it in the specific member endpoints

## Testing from Frontend

The frontend application automatically tests these endpoints:

1. **Home Page** - Calls `GET /api/team`
2. **View Members Page** - Calls `GET /api/members`
3. **Add Member** - Calls `POST /api/members` with form data
4. **Member Details** - Calls `GET /api/members/:id`
5. **Edit Member** - Calls `PUT /api/members/:id`
6. **Delete Member** - Calls `DELETE /api/members/:id`

## Common Errors and Solutions

| Error | Cause | Solution |
|-------|-------|----------|
| Connection refused | Backend not running | Start backend: `npm start` |
| 404 - Not found | Invalid member ID | Check the ID format |
| 400 - Bad request | Missing required fields | Ensure all fields are provided |
| File too large | Image exceeds 5MB | Use smaller image file |
| CORS error | Frontend/backend mismatch | Check frontend proxy in package.json |

## Image URLs

After uploading, images are accessible at:
```
http://localhost:5000/uploads/[filename]
```

Example:
```
http://localhost:5000/uploads/1682251800000-1234567890.jpg
```

This URL is automatically stored in the member's `image` field in the database.

## Notes

- All timestamps are in ISO 8601 format
- Member IDs are MongoDB ObjectIDs (24-character hex strings)
- Images must be JPEG, PNG, GIF, or WebP format
- Maximum image size: 5MB
- Phone numbers are stored as strings (no validation)
- All fields except bio and image are required for member creation
