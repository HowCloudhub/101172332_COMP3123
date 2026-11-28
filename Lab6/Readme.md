# Week06 Exercise - Notes Application

Build a Restful CRUD API for a simple Note-Taking application using Node.js, Express and MongoDB.

## Completed Tasks

- Created Note Schema in `models/Notes.js` with fields: noteTitle, noteDescription, priority (HIGH/MEDIUM/LOW), dateAdded, dateUpdated.
- Implemented full CRUD routes in `routes/NoteRoutes.js`:
  - POST `/notes` - Create a new note
  - GET `/notes` - Retrieve all notes
  - GET `/notes/:noteId` - Retrieve a single note
  - PUT `/notes/:noteId` - Update a note
  - DELETE `/notes/:noteId` - Delete a note
- Fixed and completed `server.js` to mount routes, use environment variable or local MongoDB, and proper logging.
- Fixed model require path and removed incorrect body validation on GET requests.
- Priority enum corrected to MEDIUM 

## Steps to Setup

1. Install dependencies

```bash
npm install
```

2. Configure MongoDB
   - For local: Ensure MongoDB is running on `mongodb://localhost:27017/notesdb`
   - Or set environment variable: `export DB_URL="your-mongodb-atlas-connection-string"`

3. Run Server

```bash
node server.js
```

Server runs at http://localhost:8081

4. Optionally implement Docker OR Vercel Hosting

5. Test all API on Postman and take screenshots.

## Sample Note Payload (for POST and PUT)

```json
{
    "content": {
        "noteTitle": "Sample Note Title",
        "noteDescription": "Sample Note Description",
        "priority": "HIGH",
        "dateAdded": "06/Oct/2025",
        "dateUpdated": "06/Oct/2025"
    }
}
```

## API Endpoints

- `GET /` - Welcome message
- `POST /notes` - Create note (body as above)
- `GET /notes` - List all notes
- `GET /notes/:id` - Get one note
- `PUT /notes/:id` - Update note (body as above)
- `DELETE /notes/:id` - Delete note
