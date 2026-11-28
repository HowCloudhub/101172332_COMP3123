# COMP3123 exec05 — Express Routes

## Setup and run

```bash
npm install
npm run dev
```

The server listens on port 8081 by default. Set `PORT` to use a different port.

## Endpoints

- `GET /home` — serves `public/home.html`.
- `GET /api/v1/user/profile` — returns all fields from `user.json`.
- `POST /api/v1/user/login` — checks JSON `username` and `password` against `user.json`.
- `GET /api/v1/user/logout/:username` — returns an HTML logout message.

Sample login body:

```json
{ "username": "bret", "password": "bret@123" }
```

## Short answers

**Purpose of `express.Router()`:** It creates a mountable group of routes. This project keeps related user routes in `routes/users.js` and mounts that router at `/api/v1/user`, keeping `index.js` organized.

**Error handling:** Express error middleware has four parameters: `(err, req, res, next)`. Register it after routes. A route can pass errors to it with `next(err)`. This project responds with HTTP 500 and `Server Error`; it forwards the error if response headers have already been sent.

**Dynamic port:** `process.env.PORT || 8081` uses the hosting platform's port when provided, otherwise local port 8081.

## MongoDB Atlas

The supplied README tasks use `user.json`; they do not require an application database connection. Keep Atlas passwords and connection strings out of GitHub. The separate Atlas screenshot should show the logged-in account or cluster page without exposing credentials.
